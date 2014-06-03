module.exports = function (grunt) {
  return {
    options: {
      hostname: grunt.option('host') || 'localhost',
      port: grunt.option('port') || '9876',
      browsers: ['PhantomJS'],
      files: [
        'src/<%= libraryName %>.js',
        'test/<%= libraryName %>.js'
      ],
      frameworks: [
        'chai',
        'mocha',
        'sinon'
      ],
      plugins: [
        'karma-chai',
        'karma-mocha',
        'karma-phantomjs-launcher',
        'karma-sinon'
      ],
      singleRun: true
    },
    cli: {},
    http: {
      singleRun: false
    }
  };
};
