'use strict';

var assign = require('object-assign/index');
var dom = require('./utils/dom');
var get = require('./utils/get');
var forEach = require('./utils/forEach');
var patch = require('../../lib/incremental-dom').patch;
var template = require('./template');
var I18n = require('./utils/I18n');
var DropdownMenu = require('../scss/dropdown/main.js');

module.exports = AppHeader;

/**
 * Represents the header for Pearson Higher Ed web applications.
 * @param {HTMLElement} element
 * @param {Object} options
 */
function AppHeader(element, options) {
	this.init(element, options);
}


AppHeader.prototype.constants_ = {
	MODES: ['Signed Out', 'Basic', 'Course', 'Integration', 'Legacy Course'],
	MAX_COURSE_ITEMS: 5,
	LOGIN_EVENT: 'oAppHeader.login',
	LOGOUT_EVENT: 'oAppHeader.logout'
};


/**
 * Default settings for all AppHeader instances.
 * @type {Object}
 */
AppHeader.defaultSettings = {
	consoleBaseUrl: 'https://console.pearson.com',
	links: {
		home: '{consoleBaseUrl}/console/home',
		myAccount: '{consoleBaseUrl}/account/manage/account'
	},
	menu: {
		// showAllCoursesMenuItem: false
	},
	mode: 'Signed Out',
	// Mode options
	showLoginControls: true,
	menuItems: [],
	onLogin: noop,
	onLogout: noop
};


/**
 * Initializes an AppHeader instance.
 * @param  {HTMLElement} element
 * @param  {Object} options
 * @return {AppHeader}
 */
AppHeader.init = function (element, options) {
	return new AppHeader(element, options);
};


/**
 * Initializes the current AppHeader instance.
 * @param  {HTMLElement} [element] The DOM element to initialize.
 * Defaults to document.body, in which case the header element is
 * prepended to the contents of the body element.
 * @param  {Object} options
 */
AppHeader.prototype.init = function (element, options) {
	if (typeof element === 'object' && !(element instanceof HTMLElement)) {
		options = element;
		element = null;
	}
	if (!element) element = document.body;
	if (!(element instanceof HTMLElement)) element = document.querySelector(element);

	var settings = this.getSettings_(options);
	var rootEl = this.element = this.constructRootEl_(settings);

	this.i18n_ = new I18n({ locale: settings.locale });
	this.state_ = assign({}, settings);

	if (element === document.body) {
		element.insertBefore(rootEl, element.firstChild);
	} else {
		// Replace the passed in element with the header element
		element.parentElement.insertBefore(rootEl, element);
		element.parentNode.removeChild(element);
	}

	this.render_();
};


/**
 * Returns the current header mode.
 * @return {string} The header mode.
 */
AppHeader.prototype.getMode = function () {
	return this.state_.mode;
};


/**
 * Sets the header mode.
 * @param {string} mode The mode.
 * @param {Object} [options] An object with the options for the specified mode.
 */
AppHeader.prototype.setMode = function (mode, options) {
	var newState = assign({}, this.state_, { mode: mode }, options || {});

	this.validateSettings_(newState);
	this.setState_(newState, true);
};


/**
 * Private methods
 */


/**
 * Updates the internal state by replacing the existing object with a new
 * object containing the new state.
 * @param {Object} newState An object containing the new state.
 * @param {Boolean} [update] If true, update the component's view.
 */
AppHeader.prototype.setState_ = function (newState, update) {
	this.state_ = assign({}, this.state_, newState);
	if (update) this.render_();
};


AppHeader.prototype.validateSettings_ = function (settings) {
	if (this.constants_.MODES.indexOf(settings.mode) === -1) {
		throw new TypeError('Unrecognized mode, \'' + settings.mode + '\'');
	}
};


AppHeader.prototype.getSettings_ = function (options) {
	options = options || {};

	// Merge links object
	var globalSettings = this.getGlobalSettings_();
	var links = assign({}, AppHeader.defaultSettings.links, globalSettings.links, options.links);

	var settings = assign({}, AppHeader.defaultSettings, globalSettings, options, { links: links });

	this.validateSettings_(settings);

	return settings;
};


AppHeader.prototype.getGlobalSettings_ = function () {
	var configEl = document.querySelector('[data-o-app-header-config]');
	var config = {};

	if (!configEl) return config;
	try { config = JSON.parse(configEl.textContent); } catch (e) { throw new Error('Unable to parse configuration object: invalid JSON'); }
	return config;
};


AppHeader.prototype.resolveLink_ = function (key) {
	if (!this.state_.links[key] || typeof this.state_.links[key] !== 'string') return;

	return this.state_.links[key].replace('{consoleBaseUrl}', this.state_.consoleBaseUrl);
};


AppHeader.prototype.constructRootEl_ = function (options) {
	var element = document.createElement('header');

	element.classList.add('o-app-header');
	element.setAttribute('role', 'banner');
	element.classList.add('o-header');
	element.classList.add('o-header--fixed');

	element.addEventListener('oDropdownMenu.expand', function (e) {
		forEach(e.target.querySelectorAll('.o-app-header__icon'), function (idx, item) {
			item.classList.remove('pe-icon--chevron-down');
			item.classList.add('pe-icon--chevron-up');
		});
	});

	element.addEventListener('oDropdownMenu.collapse', function (e) {
		forEach(e.target.querySelectorAll('.o-app-header__icon'), function (idx, item) {
			item.classList.remove('pe-icon--chevron-up');
			item.classList.add('pe-icon--chevron-down');
		});
	});

	return element;
};


AppHeader.prototype.setThemeForMode_ = function () {
	if ((this.state_.mode === 'Course' || this.state_.mode === 'Legacy Course') &&
		this.state_.theme === 'light') {
		this.element.classList.add('o-header--theme-light');
	} else {
		this.element.classList.remove('o-header--theme-light');
	}
};


AppHeader.prototype.getDataForRender_ = function () {
	var mode = this.state_.mode;
	var data = {};
	var menuItems = [];

	var menuItemCounter = 0;

	function createMenuItemDef(source, options) {
		options = options || {};
		options.classes = options.classes || [];

		var defaultClasses = [];

		if (options.classes.indexOf('o-dropdown-menu__divider') === -1) {
			defaultClasses = ['o-dropdown-menu__menu-item'];
		}

		var menuItem = assign({}, source);

		menuItem.key = menuItemCounter++;
		menuItem.classes = defaultClasses.concat(options.classes).join(' ');

		return menuItem;
	}

	var menuNavItemClasses = ['o-header__nav-item'];

	if (mode === 'Signed Out' && this.state_.showLoginControls) {
		menuNavItemClasses.push('o-app-header__nav-item-sign-in');
	}

	if (mode === 'Basic' ||
		mode === 'Course' ||
		mode === 'Legacy Course') {
		menuNavItemClasses.push('o-app-header__nav-item-menu');
	}

	menuNavItemClasses = menuNavItemClasses.join(' ');

	if (mode === 'Basic') {
		var courseItems = get(this.state_, 'courseItems') || [];
		var courseItemsExceedsMax = false;

		if (courseItems.length > this.constants_.MAX_COURSE_ITEMS) {
			courseItemsExceedsMax = true;
			courseItems = courseItems.slice(0, this.constants_.MAX_COURSE_ITEMS);
		}

		if (courseItems.length) {
			for (var i = 0, l = courseItems.length; i < l; i++) {
				menuItems.push(createMenuItemDef(courseItems[i], {
					classes: [
						'o-app-header__menu-item-course',
						'o-header__viewport-tablet--hidden',
						'o-header__viewport-desktop--hidden'
					]
				}));
			}

			if (courseItemsExceedsMax) {
				menuItems.push(createMenuItemDef({
					text: this.i18n_.translate('All courses'),
					href: this.resolveLink_('home')
				}, {
					classes: [
						'o-app-header__menu-item-all-courses',
						'o-header__viewport-tablet--hidden',
						'o-header__viewport-desktop--hidden'
					]
				}));
			}

			menuItems.push(createMenuItemDef({}, {
				classes: [
					'o-dropdown-menu__divider',
					'o-header__viewport-tablet--hidden',
					'o-header__viewport-desktop--hidden'
				]
			}));
		}
	}

	if (mode === 'Course' || mode === 'Legacy Course') {
		menuItems.push(createMenuItemDef({
			text: this.i18n_.translate('All courses'),
			href: this.resolveLink_('home')
		}, {
			classes: [
				'o-app-header__menu-item-all-courses',
				'o-header__viewport-tablet--hidden',
				'o-header__viewport-desktop--hidden'
			]
		}));

		menuItems.push(createMenuItemDef({}, {
			classes: [
				'o-dropdown-menu__divider',
				'o-header__viewport-tablet--hidden',
				'o-header__viewport-desktop--hidden'
			]
		}));

		var courseNav = assign({ items: [] }, get(this.state_, 'courseNav'));

		if (courseNav.heading || courseNav.items.length) {
			var courseNavRoot = {
				isCourseNav: true,
				courseNavMenuItems: []
			};

			if (courseNav.heading) {
				courseNavRoot.courseNavMenuItems.push(createMenuItemDef(courseNav.heading, {
					classes: [
						'o-app-header__menu-item-course-nav',
						'o-dropdown-menu__heading'
					]
				}));
			}

			courseNav.items.forEach(function (item) {
				var classes = ['o-app-header__menu-item-course-nav'];

				if (item.active) classes.push('o-dropdown-menu__menu-item--disabled');

				courseNavRoot.courseNavMenuItems.push(createMenuItemDef(item, {
					classes: classes
				}));
			});

			menuItems.push(courseNavRoot);
		}
	}

	if (mode === 'Legacy Course' && this.state_.menuItems.length) {
		this.state_.menuItems.forEach(function (menuItem) {
			menuItems.push(createMenuItemDef(menuItem, {
				classes: ['o-app-header__menu-item']
			}));
		});

		menuItems.push(createMenuItemDef({}, { classes: ['o-dropdown-menu__divider'] }));
	}

	if (mode === 'Basic' || mode === 'Course' || mode === 'Legacy Course') {
		// My Account
		menuItems.push(createMenuItemDef({
			text: this.i18n_.translate('My Account'),
			href: this.resolveLink_('myAccount')
		}, {
			classes: ['o-app-header__menu-item-my-account']
		}));

		// Sign Out
		menuItems.push(createMenuItemDef({
			text: this.i18n_.translate('Sign Out'),
			onClick: this.getHandler_('onLogout', this.constants_.LOGOUT_EVENT)
		}, {
			classes: ['o-app-header__menu-item-sign-out']
		}));
	}

	data = assign({}, this.state_, {
		mode: mode,
		links: {
			home: this.resolveLink_('home')
		},
		menuItems: menuItems,
		menuNavItemClasses: menuNavItemClasses
	});

	return data;
};


AppHeader.prototype.getHandler_ = function (prop, eventName) {
	var element = this.element;
	var handler = this.state_[prop];

	function wrapHandler(handler) {
		return function (e) {
			e.preventDefault();
			if (eventName) dom.dispatchEvent(element, eventName);
			handler.call();
		};
	}

	if (typeof handler === 'function') return wrapHandler(handler);
	else if (typeof window[handler] === 'function') return wrapHandler(window[handler]);
	else throw new TypeError('Expected \'' + prop + '\' to be a function');
};


AppHeader.prototype.render_ = function () {
	var element = this.element;
	var i18n = this.i18n_;

	var data = this.getDataForRender_();

	var handlers = {
		handleLogin: this.getHandler_('onLogin', this.constants_.LOGIN_EVENT),
		handleHelpNavItemClick: this.handleHelpNavItemClick_.bind(this)
	};

	this.setThemeForMode_();

	patch(element, function () {
		template(data, handlers, i18n.translate.bind(i18n));
		DropdownMenu.init(element);
		dom.dispatchEvent(element, 'oAppHeader.didUpdate');
	});
};


AppHeader.prototype.handleHelpNavItemClick_ = function (e) {
	e.preventDefault();

	// Since we prevent the default action, the dropdown menu nav items
	// will not collapse automatically.
	var accountMenuEl = this.element.querySelector('.o-app-header__menu-menu');

	if (accountMenuEl) {
		accountMenuEl.classList.remove('o-dropdown-menu--expanded');

		var accountMenuIconEls = accountMenuEl.querySelectorAll('.o-app-header__icon');

		forEach(accountMenuIconEls, function (idx, el) {
			el.classList.remove('pe-icon--chevron-up');
			el.classList.add('pe-icon--chevron-down');
		});
	}

	dom.dispatchEvent(this.element, 'oAppHeader.help.toggle');
};

function noop() {}
