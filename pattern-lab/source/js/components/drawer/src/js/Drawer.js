/* jshint -W079 */

'use strict';

var DomDelegate = require('dom-delegate');
var WeakMap = require('./weakmap/main');

var dispatchEvent = function(element, name, data) {
  if (document.createEvent && element.dispatchEvent) {
    var event = document.createEvent('Event');
    event.initEvent(name, true, true);

    if (data) {
      event.detail = data;
    }

    element.dispatchEvent(event);
  }
};

function Drawer(el) {
  if (!(this instanceof Drawer)) {
    throw new TypeError('Constructor Drawer requires \'new\'');
  }
  if (!el) {
    throw new TypeError('missing required argument: element');
  }
  if (typeof el === 'string') {
    el = document.querySelector(el);
  }

  this.target = el;
  this.currentTarget = false;
  this.trigger; // opened drawer
  this.closeButton;
  this.target.style.display ='none'; // don't tab through hidden drawers
  this.target.classList.add('o-drawer');

  this.trap = document.createElement('button');
  this.trap.className = 'pe-trap';
  this.trap.onclick = function(e) { e.preventDefault() };

  Drawer.cache.set(el, this);

  var hasAlignmentClass = this.target.classList.contains('o-drawer-left') ||
                          this.target.classList.contains('o-drawer-right');
  if (!hasAlignmentClass) {
    this.target.classList.add('o-drawer-left');
  }

  if (!Drawer.delegate) {
    var delegate = new DomDelegate(document.body);
    delegate.on('click',
      '[data-toggle="o-drawer"], [data-close="o-drawer"], [data-open="o-drawer"]',
      function(e, eventTarget) { handleClick(e, eventTarget, Drawer) });
    Drawer.delegate = delegate;
  }

  var _drawer = this;
  getFocusables(_drawer); // for managing keyboard trap
  closeOtherDrawers(_drawer);// two drawers never open on the same side

  return this;
}

Drawer.cache = new WeakMap();


/**
 * Initializes all drawer elements on the page or within
 * the element passed in.
 * @param  {HTMLElement|string} element DOM element or selector.
 * @return {DropdownMenu[]} List of Drawer instances that
 * have been initialized.
 */
Drawer.init = function(element) {
  var drawerEls = selectAll(element),
      drawers = [];

  for(var i=0, l=drawerEls.length; i<l; i++) {
    drawers.push(new Drawer(drawerEls[i]));
  }

  return drawers;
};

function selectAll(element) {
  if (!element) {
    element = document.body;
  }
  if (!(element instanceof HTMLElement)) {
    element = document.querySelectorAll(element)[0];
  }

  return element.querySelectorAll('[data-o-component="o-drawer"]');
}


/**
 * Destroy all Drawer Components on the page
 */
Drawer.destroy = function() {
  if (Drawer.bodyDelegate) {
    Drawer.bodyDelegate.destroy();
  }
};

/**
 * Opens the Drawer
 * Sets aria-expanded on the triggering control and saves trigger
 * Sets focus to first focusable/close button
 * Traps focus within
 * @return {Drawer} self, for chainability
 */
Drawer.prototype.open = function() {
  if (this.target.classList.contains('o-drawer-open')) {
    return this;
  }

  this.trigger = document.activeElement;
  var control = this.trigger,
      t = this.target,
      firstFocusable = this.firstFocusable;

  t.style.display = 'block';
  if (t.classList.contains('o-drawer-animated')) {
    setTimeout(function() {
      setStates(t, control, firstFocusable);
    }, 50);
  }
  else {
    setStates(t, control, firstFocusable);
  }

  this.bound = this.trapFocus.bind(this);
  t.addEventListener('keydown', this.bound);

  this.currentTarget = true;
  if (t.classList.contains('o-drawer-right')) {
    dispatchEvent(t, 'o.Drawer.RightDrawer');
  }
  if (t.classList.contains('o-drawer-left')) {
    dispatchEvent(t, 'o.Drawer.LeftDrawer');
  }

  dispatchEvent(t, 'oDrawer.open');

  return this;
};

function setStates(t, control, firstFocusable) {
  t.classList.add('o-drawer-open');
  control && control.setAttribute('aria-expanded', 'true');
  firstFocusable && firstFocusable.focus();
}


/**
 * Closes the Drawer
 * Releases keyboard trap
 * Moves focus back to triggering control if applicable
 * Set aria-expanded to false on trigger
 * @return {Drawer} self, for chainability
 */
Drawer.prototype.close = function() {
  if (!this.target.classList.contains('o-drawer-open')) {
    this.trigger = document.activeElement;
    return this;
  }
  this.target.classList.remove('o-drawer-open');
  dispatchEvent(this.target, 'oDrawer.close');

  this.trigger && this.trigger.setAttribute('aria-expanded', 'false');

  var t = this.target,
      closedFromWithin = containedIn(document.activeElement, t);

  if (t.classList.contains('o-drawer-animated')) {
    setTimeout(function() {
      t.style.display = 'none';
    }, 400);
  }
  else {
    t.style.display = 'none';
  }

  t.removeEventListener('keydown', this.bound);

  if (closedFromWithin && this.trigger) {
    this.trigger.focus();
  }

  return this;
};

function containedIn(child, t) {
  while ((child = child.parentNode) && (child !== t));
  return child;
}


/**
 * Toggles the Drawer
 * @return {Drawer} self, for chainability
 */
Drawer.prototype.toggle = function() {
  var visible = this.target.classList.contains('o-drawer-open');
  (visible && this.close()) || this.open();
  return this;
};

/**
 * Esc closes drawer
 * Traps tab-focus in the Drawer
 * this fails if spatial focus is used
 * waiting... https://github.com/whatwg/html/pull/1474 
 */
Drawer.prototype.trapFocus = function(e) {
  var ev = e || event,
      active = document.activeElement,
      trap = this.trap,
      firstFocusable = this.firstFocusable,
      code = ev.keyCode;

  function forwards() {
    if (active === trap) {
      ev.preventDefault();
      firstFocusable.focus();
    }
  }

  function backwards() {
    if (active === firstFocusable) {
      ev.preventDefault();
      trap.focus();
    }
  }

  switch(code) {
    case 27:
      this.close();
      break;

    case 9:
      if (this.focusables.length === 1) {
        ev.preventDefault();
        break;
      }

      return (ev.shiftKey) ? backwards() : forwards();
      break;
  
    default:
      break;
  }
}


function handleClick(e, target, Drawer) {
  e.preventDefault();
  var drawerName = target.getAttribute('data-target') ||
                   target.getAttribute('href'),
      drawerElements = document.querySelectorAll(drawerName);

  // Is it actually possible to have multiple drawers per trigger??
  // Certainly can't be with anchor triggers. 
  for (var i=0, l=drawerElements.length; i<l; i++) {
    var t = drawerElements[i],
        drawer = Drawer.cache.get(t);

    if (!drawer && t.getAttribute('data-o-component') === 'o-collapse') {
      drawer = new Drawer(t);
    }

    if (drawer) {
      var action = openCloseToggle(target);
      drawer[action]();
    }
  }
}

function getFocusables(_drawer) {
  _drawer.focusables = Array.prototype.slice.call(_drawer.target.querySelectorAll(
      '[tabindex="0"], a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled])'));

  for (var i=0, l=_drawer.focusables.length; i<l; i++) {
    var f = _drawer.focusables[i];
    if (f.hasAttribute('data-close')) {
      _drawer.closeButton = f;
      break;
    }
  }
  // could a drawer have zero focusables?
  if (_drawer.focusables.length) {
    _drawer.firstFocusable = _drawer.closeButton || _drawer.focusables[0];
    _drawer.target.appendChild(_drawer.trap);
  }
}

function closeOtherDrawers(_drawer) {
  document.addEventListener('o.Drawer.RightDrawer', function() {
    if (_drawer.target.classList.contains('o-drawer-right') && !_drawer.currentTarget) {
      _drawer.close();
    }
    _drawer.currentTarget = false;
  });

  document.addEventListener('o.Drawer.LeftDrawer', function() {
    if (_drawer.target.classList.contains('o-drawer-left') && !_drawer.currentTarget) {
      _drawer.close();
    }
    _drawer.currentTarget = false;
  });
}

function openCloseToggle(el) {
  if (el && el.dataset) {
    return Object.keys(el.dataset).filter(function(key) {
      if (el.dataset[key] === 'o-drawer') {
        return key;
      }
    });
  }
}

module.exports = Drawer;
