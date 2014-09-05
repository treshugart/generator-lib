'use strict';

var fs = require('fs');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  vars: function () {
    this.cwd = process.cwd();
  },

  dirs: function () {
    this.mkdir('build');
    this.mkdir('build/bin');
    this.mkdir('build/configs');
    this.mkdir('build/tasks');
    this.mkdir('src');
    this.mkdir('test/unit');
  },

  copies: function () {
    this.template('.editorconfig', '.editorconfig');
    this.template('.jscsrc', '.jscsrc');
    this.template('.jshintrc', '.jshintrc');
    this.template('build-configs-index.js', 'build/configs/index.js');
    this.template('build-configs-requirejs.js', 'build/configs/requirejs.js');
    this.template('Gruntfile.js', 'Gruntfile.js');
  },

  templates: function () {
    this.template('.gitignore', '.gitignore');
    this.template('bower.json', 'bower.json');
    this.template('build-bin-npm-postinstall.sh', 'build/bin/npm-postinstall.sh');
    this.template('build-configs-karma.js', 'build/configs/karma.js');
    this.template('package.json', 'package.json');
    this.template('readme.md', 'readme.md');
  },

  writes: function () {
    this.template('src-libmain.js', 'src/main.js');
    this.template('src-libtest.js', 'test/unit/main.js');
  },

  finalise: function () {
    this.npmInstall();
    fs.chmodSync('build/bin/npm-postinstall.sh', '0777');
  },
});
