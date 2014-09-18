module.exports = function () {
  return {
    dist: {
      files: {
        'dist/<%= cwd %>.min.css': [
          'dist/<%= cwd %>.css'
        ]
      }
    }
  };
};
