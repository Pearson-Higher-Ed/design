/*global require, alert, console*/
'use strict';

require('../../node_modules/pearson-elements/scss/elements.scss');
require('./demo.scss');

var AppHeader = require('../../main');
var assign = require('object-assign/index');
var forEach = require('../../src/js/utils/forEach');

document.addEventListener('DOMContentLoaded', function() {

	function getModeOptions() {
		var options = {};

		forEach(document.querySelectorAll('[name="mode-options"]'), function (idx, el) {
			if (el.checked) {
				if (el.hasAttribute('data-option-value')) {
					options[el.value] = JSON.parse(el.getAttribute('data-option-value'));
				} else {
					options[el.value] = true;
				}
			} else {
				options[el.value] = undefined;
			}
		});

		return options;
	}

	var mode = document.querySelector('.demo-container').getAttribute('data-header-mode');
	var modeOptions = getModeOptions();

	var config = assign({
		session: 'session',
		user: { givenName: 'XXXXXXXXXXXXXXXX' },
		mode: mode,
		onLogin: function () {
			alert('You signed in');
		},
		onLogout: function () {
			alert('You signed out');
		}
	}, modeOptions);

	console.info(config);
	var appHeader = new AppHeader(config);

	// Help menu
	document.addEventListener('oAppHeader.help.toggle', function () {
		alert('You toggled help');
		console.log('oAppHeader.help.toggle');
	});

	// Login/logout events
	document.addEventListener('oAppHeader.login', function () {
		console.log('oAppHeader.login');
	});

	document.addEventListener('oAppHeader.logout', function () {
		console.log('oAppHeader.logout');
	});

	// Select mode option
	document.getElementById('mode-options').addEventListener('change', function (e) {
		appHeader.setMode(mode, getModeOptions());
	});
});
