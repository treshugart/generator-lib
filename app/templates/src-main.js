(function () {
  'use strict';

  // Public API.
  var exports = {};

  // Always export global.
  window.<%= cwdCamelCased %> = exports;

  // AMD.
  if (typeof define === 'function') {
    define(function () {
      return exports;
    });
  }

  // CommonJS.
  if (typeof module === 'object') {
    module.exports = exports;
  }
}());
