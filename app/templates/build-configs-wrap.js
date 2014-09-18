module.exports = function () {
  return {
    dist: {
      src: 'dist/<%= cwd %>.js',
      dest: 'dist/<%= cwd %>.js',
      options: {
        wrapper: [
          '(function () {\n\'use strict\';',
          '}());'
        ]
      }
    }
  };
};
