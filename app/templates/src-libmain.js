(function () {
  'use strict';

  var exports = {};

  window.<%= libraryName %> = exports;

  if (typeof define === 'function' && define.amd) {
    define(function () {
      return exports;
    });
  } else if (typeof module === 'object') {
    module.exports = exports;
  }
}());
