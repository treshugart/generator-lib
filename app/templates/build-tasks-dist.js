module.exports = function (grunt) {
  'use strict';

  grunt.registerTask('dist', 'Creates the dist files.', [
    'less:dist',
    'cssmin:dist',
    'shell:dist',
    'wrap:dist',
    'uglify:dist'
  ]);
};
