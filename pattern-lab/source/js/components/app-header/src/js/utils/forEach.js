'use strict';

module.exports = forEach;

/**
 * Iterates over an Array-like object, invoking `callback` for each item in the collection.
 * @param  {Array} array The Array or Array-like object to iterate.
 * @param  {Function} callback The callback function that will be called for each item
 * in the collection.
 */
function forEach(array, callback) {
	for (var i = 0, l = array.length; i < l; i++) {
		callback(i, array[i]);
	}
}
