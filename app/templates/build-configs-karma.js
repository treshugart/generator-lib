module.exports = {
  all: {
    options: {
      browsers: ['PhantomJS'],
      files: [
        'src/<%= libraryName %>.js',
        'test/<%= libraryName %>.js'
      ],
      frameworks: ['mocha', 'chai'],
      singleRun: true
    }
  }
};
