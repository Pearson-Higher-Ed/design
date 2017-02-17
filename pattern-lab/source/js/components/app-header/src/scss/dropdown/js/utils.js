'use strict';

/**
 * Dispatch an event.
 * @param  {Element} element Element from which the event is dispatched.
 * @param  {String} name Event name.
 * @param  {Object} [data] Optional custom data to be included in event.detail.
 */
function dispatchEvent(element, name, data) {
	if (document.createEvent && element.dispatchEvent) {
		var event = document.createEvent('Event');
		event.initEvent(name, true, true);

		if (data) {
			event.detail = data;
		}

		element.dispatchEvent(event);
	}
}

/**
 * Returns the index of element in the provided list of elements.
 * @param  {NodeList|Array<HTMLElement} elements List of elements.
 * @param  {HTMLElement} element
 * @return {Number} Index (integer) of the element in the list or -1 if the element is not found.
 */
function indexOfElement(elements, element) {
	for (var i = 0, l = elements.length; i < l; i++) {
		if (elements[i] === element) return i;
	}

	return -1;
}

/**
 * Returns the index of the first visible element in the provided list of elements.
 * @param  {NodeList|Array<HTMLElement>} elements List of elements.
 * @return {Number} Index (integer) of the first visible element in the list or -1 if no items are visible.
 */
function indexOfFirstVisibleElement(elements) {
	for (var i = 0, l = elements.length; i < l; i++) {
		if (isElementVisible(elements[i])) return i;
	}

	return -1;
}

function indexOfNextVisibleElement(elements, startIndex, reverse) {
	var i, l;

	if (reverse) {
		for (i = startIndex; i > 0; i--) {
			if (isElementVisible(elements[i])) return i;
		}
	} else {
		for (i = startIndex, l = elements.length; i < l; i++) {
			if (isElementVisible(elements[i])) return i;
		}
	}

	return -1;
}

function isElementVisible(element) {
	return (
		element.offsetParent !== null &&
		(element.clientWidth + element.clientHeight) > 0
	);
}

module.exports = {
	dispatchEvent: dispatchEvent,
	indexOfElement: indexOfElement,
	indexOfFirstVisibleElement: indexOfFirstVisibleElement,
	indexOfNextVisibleElement: indexOfNextVisibleElement
};
