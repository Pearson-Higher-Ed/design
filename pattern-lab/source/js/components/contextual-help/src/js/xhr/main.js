'use strict';

module.exports = createXhr;

function createXhr(options) {
  if (arguments.length === 0) throw new TypeError('Expected 1 argument, got 0');
  if (typeof options === 'string') {
    options = {
      url: options
    };
  }
  if (!options.url) throw new TypeError('The \'url\' option is required');

  options.method = options.method || 'GET';
  options.onSuccess = options.onSuccess || noop;
  options.onError = options.onError || noop;
  options.headers = options.headers || {};
  options.data = options.data || '';

  var request = options.xhr || new XMLHttpRequest();

  function handleReadystatechange() {
    if (request.readyState !== 4) return;
    if (!isSuccess(request.status)) options.onError(request);
    else options.onSuccess(request);
  }

  request.open(options.method, options.url, true);
  request.onreadystatechange = handleReadystatechange;
  for(var h in options.headers) {
    if (options.headers.hasOwnProperty(h)) {
      var hv = options.headers[h];
      request.setRequestHeader(h,hv);
    }

  }
  request.send(options.data);

  return request;
}

function noop() { }

function isSuccess(status) {
  return status >= 200 && status <= 299;
}
