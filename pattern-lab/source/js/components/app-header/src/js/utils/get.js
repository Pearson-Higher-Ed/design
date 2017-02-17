'use strict';

module.exports = get;

/**
 * Gets the value at `path` of `object`.
 * @param {[type]} object [description]
 * @param {[type]} path   [description]
 * @return {[type]}        [description]
 */
function get(object, path) {
	if (typeof object === 'undefined' || object === null) return;

	path = path.split('.');
	var index = 0;
	var length = path.length;

	while (object !== null && typeof object !== 'undefined' && index < length) {
		object = object[path[index++]];
	}

	return (index && index === length) ? object : undefined;
}
