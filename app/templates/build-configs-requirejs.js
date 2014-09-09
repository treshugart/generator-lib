module.exports = function () {
  'use strict';

  return {
    dist: {
      options: {
        paths: {
          '<%= cwdSlashCased %>': 'src/main'
        },
        baseUrl: '.',
        name: '<%= cwdSlashCased %>',
        out: 'dist/<%= cwd %>.js'
      }
    }
  };
};
