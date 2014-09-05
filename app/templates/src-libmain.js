(function () {
  'use strict';

  // Public API.
  var exports = {};

  // Always export global.
  window.<%= cwd.toLowerCase().replace(/-(.)/g, function(match, dir) {
        return dir.toUpperCase();
    }) %> = exports;

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
