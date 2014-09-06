module.exports = function (grunt) {
  return {
    options: {
      hostname: grunt.option('host') || 'localhost',
      port: grunt.option('port') || '9876',
      browsers: ['PhantomJS'],
      files: [
        { pattern: 'src/*.js', included: false },
        { pattern: 'test/**/*.js', included: false },
        { pattern: 'test/*.js', included: true }
      ],
      frameworks: [
        'requirejs',
        'mocha',
        'chai'
      ],
      plugins: [
        'karma-phantomjs-launcher',
        'karma-requirejs',
        'karma-mocha',
        'karma-chai'
      ],
      singleRun: !grunt.option('watch')
    },
    cli: {},
    http: {
      singleRun: false
    }
  };
};
