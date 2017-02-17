'use strict';

/**
 * Dispatches a DOM event.
 * @param  {EventTarget} element
 * @param  {String} name Name of the event.
 * @param  {Object} [data] Optional data to include in the event `detail` property.
 */
exports.dispatchEvent = function (element, name, data) {
	if (document.createEvent && element.dispatchEvent) {
		var event = document.createEvent('Event');
		event.initEvent(name, true, true);

		if (data) {
			event.detail = data;
		}

		element.dispatchEvent(event);
	}
};
