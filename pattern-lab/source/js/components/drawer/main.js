/*global require, module*/
'use strict';

// bundled styling
require('./main.scss');

var Drawer = require('./src/js/Drawer');

var constructAll = function () {
  Drawer.init();
  document.removeEventListener('o.InitAllDrawerElements', constructAll);
};

document.addEventListener('o.InitAllDrawerElements', constructAll);

module.exports = Drawer;
