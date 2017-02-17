/*global require, module*/
'use strict';

// bundled styling for app-header
require('./main.scss');

var AppHeader = require('./src/js/AppHeader');

var instance;

var getOrCreateInstance = function (element, options) {
	if (!instance) {
		instance = new AppHeader(element, options);
		return instance;
	}

	return instance.setMode(options.mode, options);
};

var construct = function (e) {

	if (!e.detail || !e.detail.element || !e.detail.config) {
		window.console && console.warn('AppHeader received event missing e.detail.element and/or e.detail.config');
		return;
	}
	
	getOrCreateInstance(e.detail.element, e.detail.config);
};

document.addEventListener('o.DOMContentLoaded', construct);

module.exports = function (element, options) {
	return getOrCreateInstance(element, options);
};

module.exports.init = AppHeader.init;
