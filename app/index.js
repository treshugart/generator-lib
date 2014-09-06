'use strict';

var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  vars: function () {
    this.cwd = path.basename(process.cwd());
    this.cwdCamelCased = this.cwd.toLowerCase().replace(/-(.)/g, function(match, dir) {
      return dir.toUpperCase();
    });
  },

  dirs: function () {
    this.mkdir('build');
    this.mkdir('build/bin');
    this.mkdir('build/configs');
    this.mkdir('build/tasks');
    this.mkdir('src');
    this.mkdir('test/unit');
  },

  files: function () {
    this.template('.editorconfig', '.editorconfig');
    this.template('.gitignore', '.gitignore');
    this.template('.jscsrc', '.jscsrc');
    this.template('.jshintrc', '.jshintrc');
    this.template('bower.json', 'bower.json');
    this.template('build-bin-npm-postinstall.sh', 'build/bin/npm-postinstall.sh');
    this.template('build-configs-index.js', 'build/configs/index.js');
    this.template('build-configs-karma.js', 'build/configs/karma.js');
    this.template('build-configs-requirejs.js', 'build/configs/requirejs.js');
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('package.json', 'package.json');
    this.template('readme.md', 'readme.md');
    this.template('src-main.js', 'src/main.js');
    this.template('test-unit-main.js', 'test/unit/main.js');
    this.template('test-unit.js', 'test/unit.js');
  },

  writes: function () {


  },

  finalise: function () {
    this.npmInstall();
    fs.chmodSync('build/bin/npm-postinstall.sh', '0777');
  },
});
