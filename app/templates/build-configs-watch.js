module.exports = function (grunt) {
  var js = 'src/{*,**/*}.js';
  var less = 'src/{*,**/*}.less';
  var test = 'src/{*,**/*}.js';

  return {
    dist: {
      files: [js, less],
      tasks: ['less:dist', 'shell:dist', 'uglify:dist']
    },
    test: {
      files: [js, less, test],
      tasks: ['shell:test']
    }
  };
};
