'use strict';

var XHR = require('./xhr/main');

// setup templates
var helpTemplate = require('html!../html/helpT.html');
var topicExcerptTemplate = require('html!../html/excerptT.html');
var topicTemplate = require('html!../html/contentT.html');


function ContextualHelp(el) {

  var me = this,
      baseURL = 'https://raw.githubusercontent.com/Pearson-Higher-Ed/help-content/master/out/';

  function getConfig() {
    var conf = {},
        configEl = document.querySelector('[data-o-contextual-help-config]');
    if (!configEl) {
      return conf;
    }
    try {
      conf = JSON.parse(configEl.textContent);
    }
    catch(e) {
      conf = {};
      throw new Error('Unable to parse configuration object: invalid JSON');
    }
    return conf;
  }

  this.fetchHelpContent = function(contentId, cb) {
    cb = cb || function() {};
    if (contentId.replace(/\s/,'') === '') {
      cb("no content ID issued");
    }
    if (me.cache && me.cache[contentId]) {
      cb(null, me.cache[contentId]);
      return;
    }
    // get it from github
    XHR({
      url: baseURL + me.lang + '/' + contentId + '.json',
      onSuccess: function(req) {
        var data = JSON.parse(req.responseText);
        // if found, stick in cache
        me.cache[contentId] = data;
        // return in cb(null, content)
        cb(null, data);
      },
      onError: function(req) {
        // retry as en-us
        if (me.lang !== me.defaultLang) {
          var tempLang = me.defaultLang;
          XHR({
            url: baseURL + '/' + tempLang + '/' + contentId + '.json',
            onSuccess: function(reqInner) {
              var data = JSON.parse(reqInner.responseText);
              me.cache[contentId] = data;
              cb(null, data);
            },
            onError: function(reqInner) {
              cb(reqInner);
            }
          });
        }
        else {
          cb(req);
        }
      }
    });
  };

  this.defaultLang = 'en-us';
  this.lang = this.defaultLang;
  // figure out what el is and go get it if necessary
  if (el instanceof String) {
    el = document.querySelector('#'+el);
  }

  this._el = el;
  // init content cache
  this.cache = {};

  // init topics list
  this.topics = [];


  // add templates to target el
  if (el.nodeType) {
    el.innerHTML = helpTemplate;
  }

  // inner_trigger is a help topic heading that has been clicked.
  // Clicking close-content button needs to move focus
  // back to that help topic heading
  this._inner_trigger = null;

  // initially make layer2 unfocusable
  el.querySelector('.o-contextual-help__topic-content').style.visibility = 'hidden';

  el.querySelector('#contextual-help-close-content').onclick = function() {
     me.manageLayers(false);
  };

  // establish configuration
  var conf = getConfig();
  if (conf && conf.helpTopics && conf.helpTopics.length > 0) {
    this.topics = conf.helpTopics;
  }
  // populate excerpts into topic list
  this.populateFromList = function(list, cb) {
    cb = cb || function() {};
    if (list.length > 0) {
      var item = list.splice(0,1)[0];
      me.fetchHelpContent(item, function(err, cData) {
        if (!cData || err) {
          if (list.length > 0) {
            me.populateFromList(list, cb);
          }
        }
        var nExcerpt = document.createElement('div');
        nExcerpt.innerHTML = topicExcerptTemplate;
        var title = nExcerpt.querySelector('h3 a');
        title.innerHTML = cData.title;
        title.onclick = function() {
          me._inner_trigger = title;
          me.openHelpTopic(item);
        };
        nExcerpt.querySelector('p').innerHTML = cData.excerpt;
        me._el.querySelector('.o-contextual-help__excerpt-list').appendChild(nExcerpt);
        if (list.length > 0) {
          me.populateFromList(list, cb);
        }
        else {
          cb();
        }
      });
    }
    else {
      cb();
    }
  };

  this._initRunning = false;
  this._rerunInit = false;

  this.init = function() {
    this._initRunning = true;
    // remove everything
    this._el.querySelector('.o-contextual-help__excerpt-list').innerHTML = '';
    // populate from list
    var theList = this.deDupeTopics();
    this.populateFromList(theList, function() {
      me._initRunning = false;
      if (me._rerunInit) {
        me._rerunInit = false;
        me.init();
      }
    });
    return;
  };

  // bind header event for show / hide
  var eventEl = document.querySelector('header.o-app-header');
  if (eventEl) {
    eventEl.addEventListener('oAppHeader.help.toggle', function() {
      if (me.toggle) { me.toggle(); }
    });
  }

  this.scheduleInit();
  this._el.oContextualHelp = this;
  return this;
}

ContextualHelp.prototype.scheduleInit = function() {
  if (!this._initRunning) {
    this.init();
  }
  else {
    this._rerunInit = true;
  }
}

ContextualHelp.prototype.deDupeTopics = function() {
  var arr = this.topics;
  var t = arr.filter(function(item, pos) {
    return arr.indexOf(item) == pos;
  });
  return t;
}

ContextualHelp.prototype.setLanguage = function(langCode) {
  this.lang = langCode;
};

/**
 * Manages drawer layers, keyboard focus, and default first focusable
 * @param {Boolean} has_topic - True means there is a specific topic in layer2.
 */
ContextualHelp.prototype.manageLayers = function(has_topic) {
  var el = this._el,
      _this = this,      
      layer1 = el.querySelector('.o-contextual-help__topics'),
      layer2 = el.querySelector('.o-contextual-help__topic-content'),
      layer1_close_btn = layer1.querySelector('.close-help'),
      layer2_close_btn = layer2.querySelector('.close-help'),
      close_topics_btn = layer2.querySelector('#contextual-help-close-content');

  if (has_topic) {
  // layer1 should not be navigable! or seen
  // visibility adds/removes from a11y tree and tab flow
  // unlike display, does not require a repaint!
    layer2.style.visibility = 'visible';
    this._drawer.firstFocusable = layer2_close_btn;
    el.classList.add('o-contextual-help__content--visible');

    // wait for CSS animation
    setTimeout(function() {
      layer1.style.visibility = 'hidden';
      close_topics_btn.focus();
    }, 450);
  }
  else {
    layer1.style.visibility = 'visible';
    this._drawer.firstFocusable = layer1_close_btn;
    el.classList.remove('o-contextual-help__content--visible');

    setTimeout(function() {
      layer2.style.visibility = 'hidden';
      // if layer2 had been opened by a help topic, return to it
      if (_this._inner_trigger !==null) {
        _this._inner_trigger.focus();
        _this._inner_trigger = null;
      }
      else {
        layer1_close_btn.focus();
      }
    }, 450);
  }
};


ContextualHelp.prototype.accordion = function() {
  var accordion = this._el.querySelector('.o-contextual-help__accordion'),
      buttons = accordion.querySelectorAll('.o-disclosure'),
      panels = accordion.querySelectorAll("[class^='o-panel--']");

  for (var i=0,l=buttons.length; i<l; i++) {
    var button = buttons[i];
    button.onclick = function(e) {
      var panel = document.getElementById(this.getAttribute('aria-controls')),
          icon = this.getElementsByTagName('I')[0];
      if (this.getAttribute('aria-expanded')=="true") {
        panel.className = 'o-panel--closed';
        icon.className = 'pe-icon--caret-right';
        this.setAttribute('aria-expanded', false);
      }
      else {
        panel.className = 'o-panel--open';
        icon.className = 'pe-icon--caret-down';
        this.setAttribute('aria-expanded', true);
      }
    };
  }
};

/**                                                                             
 * Retrieves topic content. If drawer is not already open, opens it.
 * Calls layerManagement to ensure layer2 (content) is visible 
 * @param {String} topic - topic name.                
 */
ContextualHelp.prototype.openHelpTopic = function(topic) {
  var contentTarget = this._el.querySelector('#o-contextual-help-topic-content-target'),
      el = this._el;
  if (!topic) {
    contentTarget.innerHTML = '';
  }
  // fetch it and put the content in the content target
  if (topic) {
    this.fetchHelpContent(topic, function(err, cData) {
      if (err) {
        throw err;
      }
      if (!cData) {
        return;
      }
      contentTarget.innerHTML = topicTemplate;
      contentTarget.querySelector('h2').innerHTML = cData.title;
      var contentCT = contentTarget.querySelector('div');
      contentCT.innerHTML = cData.content;
    });

    if (contentTarget.querySelector('.o-contextual-help__accordion')) {
      this.accordion();
    }
  }

  this.manageLayers(true);
  if (!el.classList.contains('o-drawer-open')) {
    this.open();
  }
};

/*
takes string topic or array of strings
adds these topics to the topic list
*/
ContextualHelp.prototype.addTopics = function(topic) {
  if (typeof topic === 'string') {
    topic = [topic];
  }
  for (var i=0, l=topic.length; i<l; i++) {
    var t = topic[i];
    if (this.topics.indexOf(t) < 0) {
      this.topics.push(t);
    }
  }
  this.scheduleInit();
};

ContextualHelp.prototype.removeTopics = function(topic) {
  if (typeof topic === 'string') {
    topic = [topic];
  }
  for (var i=0, l=topic.length; i<l; i++) {
    var t = topic[i];
    if (this.topics.indexOf(t) >= 0) {
      this.topics.splice(this.topics.indexOf(t), 1);
    }
  }
  this.scheduleInit();
};

/*
removes all topics from current config
*/
ContextualHelp.prototype.removeAllTopics = function() {
  this.topics.splice(0,this.topics.length);
  this.scheduleInit();
  return;
};

/*
returns list of all topics currently in use
*/
ContextualHelp.prototype.getTopics = function() {
  return this.topics;
};

module.exports = ContextualHelp;
