(function () {
  'use strict';

  // Public API.
  var exports = {};

  // Alays export global.
  window.globalName = exports;

  // AMD.
  if (typeof define === 'function' && define.amd) {
    define(function () {
      return exports;
    });
  }

  // CommonJS.
  else if (typeof module === 'object') {
    module.exports = exports;
  }
}());
