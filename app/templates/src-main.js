'use strict';

var <%= cwdCamelCased %> = {};

// Exporting
// ---------

// Always export the global. We don't know how consumers are using it and what
// their environments are like. Doing this affords them the flexibility of
// using it in an environment where module and non-module code may co-exist.
window.<%= cwdCamelCased %> = <%= cwdCamelCased %>;

// AMD
if (typeof define === 'function' && define.amd) {
  define(function () {
    return <%= cwdCamelCased %>;
  });
}

// CommonJS
if (typeof module === 'object') {
  module.exports = <%= cwdCamelCased %>;
}

// ES6
export default <%= cwdCamelCased %>;
