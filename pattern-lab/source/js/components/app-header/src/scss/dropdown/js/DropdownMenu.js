'use strict';

var DomDelegate = require('dom-delegate');
var constants = require('./constants');
var utils = require('./utils');

var dispatchEvent = utils.dispatchEvent;
var indexOfElement = utils.indexOfElement;
var indexOfFirstVisibleElement = utils.indexOfFirstVisibleElement;
var indexOfNextVisibleElement = utils.indexOfNextVisibleElement;

var ESC = constants.ESC;
var SPACE = constants.SPACE;
var UP_ARROW = constants.UP_ARROW;
var DOWN_ARROW = constants.DOWN_ARROW;

var matchKeys = new RegExp(UP_ARROW + '|' + DOWN_ARROW + '|' + ESC + '|' + SPACE);

/**
 * Represents a contextual menu for displaying list items.
 * @param {HTMLElement} element
 */
function DropdownMenu(element) {
	if (!(this instanceof DropdownMenu)) throw new TypeError('Constructor DropdownMenu requires \'new\'');
	if (!element) throw new TypeError('missing required argument: element');
	if (element.hasAttribute('data-upgraded')) return;

	var dropdownMenu = this;
	this.element = element;

	var toggleElement = this.toggleElement = element.querySelector('[data-toggle="dropdown-menu"]');
	if (!toggleElement) throw new Error('unable to locate a child element with selector: [data-toggle="dropdown-menu"]');

	function handleClick(e) {
		if (e.target.tagName.toLowerCase() === 'a' &&
			e.target.getAttribute('data-toggle') !== 'dropdown-menu') {

			if (e.target.href === '#' ||
				e.target.parentElement.classList.contains('o-dropdown-menu__menu-item--disabled')) {

				e.preventDefault();
			}
		} else {
			e.preventDefault();
		}

		dropdownMenu.toggle();
	}

	function handleKeydown(e) {
		// Handle up arrow, down arrow, escape, and space keys for elements that
		// are not inputs and textareas
		if (!matchKeys.test(e.which) || /input|textarea/i.test(e.target.tagName)) return;

		e.preventDefault();
		e.stopPropagation();

		var element = getRootElement(e.target);
		var toggleElement = element.querySelector('[data-toggle="dropdown-menu"]');

		var isExpanded = element.classList.contains('o-dropdown-menu--expanded');

		// Toggle the menu: if not expanded, keys other than esc will expand it;
		// if expanded, esc will collapse it.
		if ((!isExpanded && e.which !== ESC) || (isExpanded && e.which === ESC)) {
			if (e.which === ESC) dispatchEvent(toggleElement, 'focus');
			return dispatchEvent(toggleElement, 'click');
		}

		// Focus menu item
		var selector =
			'.o-dropdown-menu__menu-item:not(.o-dropdown-menu__menu-item--disabled) a, ' +
			'.o-dropdown-menu__menu-item:not(.o-dropdown-menu__menu-item--disabled) button';
		var itemEls = element.querySelectorAll(selector);

		if (!itemEls.length) return;

		var index = indexOfElement(itemEls, e.target);

		if (e.which === UP_ARROW && index > 0) index = indexOfNextVisibleElement(itemEls, --index, true);
		if (e.which === DOWN_ARROW && index < itemEls.length - 1) index = indexOfNextVisibleElement(itemEls, ++index);
		if (index <= 0) index = indexOfFirstVisibleElement(itemEls);

		itemEls[index].focus();
	}

	if (!DropdownMenu.bodyDelegate) {
		var bodyDelegate = new DomDelegate(document.body);

		bodyDelegate.on('click', function (e) {
			if (!e.defaultPrevented) collapseAll();
		});

		DropdownMenu.bodyDelegate = bodyDelegate;
	}

	var elementDelegate = new DomDelegate(element);

	elementDelegate.on('keydown', '[data-toggle="dropdown-menu"]', handleKeydown);
	elementDelegate.on('keydown', '[role="menu"]', handleKeydown);
	elementDelegate.on('click', handleClick);

	function destroy() {
		elementDelegate.destroy();
	}

	this.destroy = destroy;

	this.element.setAttribute('data-upgraded', 'o-dropdown-menu');
}

/**
 * Initializes all dropdown-menu elements on the page or within
 * the element passed in.
 * @param  {HTMLElement|string} element DOM element or selector.
 * @return {DropdownMenu[]} List of DropdownMenu instances that
 * have been initialized.
 */
DropdownMenu.init = function (element) {
	var dropdownMenuEls = selectAll(element);
	var dropdownMenus = [];

	for (var i = 0, l = dropdownMenuEls.length; i < l; i++) {
		dropdownMenus.push(new DropdownMenu(dropdownMenuEls[i]));
	}

	return dropdownMenus;
};

/**
 * Destroys all dropdown-menu instances on the page.
 */
DropdownMenu.destroy = function () {
	DropdownMenu.bodyDelegate && DropdownMenu.bodyDelegate.destroy();
};

/**
 * Expands or collapses the menu items.
 */
DropdownMenu.prototype.toggle = function () {
	var element = this.element;
	var toggleElement = this.toggleElement;

	var isDisabled =
		toggleElement.classList.contains('o-dropdown-menu__toggle--disabled') ||
		toggleElement.disabled;

	var isExpanded = element.classList.contains('o-dropdown-menu--expanded');

	collapseAll();

	if (isDisabled) return;

	if (!isExpanded) {
		element.classList.add('o-dropdown-menu--expanded');
		toggleElement.setAttribute('aria-expanded', 'true');
		dispatchEvent(element, 'oDropdownMenu.expand');
	}

	return this;
};

function getRootElement(element) {
	while (element !== null) {
		if (element.classList.contains('o-dropdown-menu')) return element;
		element = element.parentElement;
	}
}

function selectAll(element) {
	if (!element) {
		element = document.body;
	} else if (!(element instanceof HTMLElement)) {
		element = document.querySelectorAll(element);
	}

	return element.querySelectorAll('.o-dropdown-menu');
}

function collapseAll() {
	var dropdownMenuEls = selectAll();

	for (var i = 0, l = dropdownMenuEls.length; i < l; i++) {
		var element = dropdownMenuEls[i];
		var toggleElement = element.querySelector('[data-toggle="dropdown-menu"]');

		if (!element.classList.contains('o-dropdown-menu--expanded')) continue;

		element.classList.remove('o-dropdown-menu--expanded');
		toggleElement.removeAttribute('aria-expanded');
		dispatchEvent(element, 'oDropdownMenu.collapse');
	}
}

module.exports = DropdownMenu;
