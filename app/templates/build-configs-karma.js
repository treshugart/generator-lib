module.exports = {
  options: {
    browsers: ['PhantomJS'],
    files: [
      'src/<%= libraryName %>.js',
      'test/<%= libraryName %>.js'
    ],
    frameworks: [
      'chai',
      'mocha'
    ],
    plugins: [
      'karma-chai',
      'karma-mocha',
      'karma-phantomjs-launcher'
    ],
    singleRun: true
  },
  cli: {},
  http: {
    singleRun: false
  }
};
