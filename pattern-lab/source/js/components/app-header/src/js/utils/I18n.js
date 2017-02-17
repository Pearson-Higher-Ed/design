'use strict';

var assign = require('object-assign/index');

module.exports = I18n;

function I18n(options) {
	var settings = assign({}, this.defaultSettings, options);
	this.keys = this.strings[settings.locale] || this.strings.en;
}

I18n.prototype.defaultSettings = {
	locale: 'en'
};

I18n.prototype.translate = function (key) {
	return this.keys[key] || key;
};

I18n.prototype.strings = {
	en: {
		'All courses': 'All courses',
		'Help': 'Help',
		'Menu': 'Menu',
		'User account menu': 'User account menu',
		'My Account': 'My Account',
		'Sign In': 'Sign In',
		'Sign Out': 'Sign Out'
	}
};
