module.exports = function () {
  return {
    dist: {
      files: {
        'dist/<%= cwd %>.css': [
          'src/main.less'
        ]
      }
    }
  };
};
