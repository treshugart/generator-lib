module.exports = function () {
  return {
    dist: {
      files: {
        'dist/<%= cwd %>.min.js': [
          'dist/<%= cwd %>.js'
        ]
      }
    }
  };
};
