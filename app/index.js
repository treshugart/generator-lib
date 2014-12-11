'use strict';

var fs = require('fs');
var path = require('path');
var yeoman = require('yeoman-generator');

module.exports = yeoman.generators.Base.extend({
  vars: function () {
    this.cwd = path.basename(process.cwd());
    this.pwd = path.basename(path.resolve(process.cwd() + '/..'));
    this.cwdCamelCased = this.cwd.toLowerCase().replace(/-(.)/g, function(match, dir) {
      return dir.toUpperCase();
    });
    this.cwdSlashCased = this.cwd.toLowerCase().replace(/-/g, '/');
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
    this.template('build')
    this.template('.editorconfig', '.editorconfig');
    this.template('.gitignore', '.gitignore');
    this.template('.jscsrc', '.jscsrc');
    this.template('.jshintrc', '.jshintrc');
    this.template('package.json', 'package.json');
    this.template('readme.md', 'readme.md');
  },

  finalise: function () {
    this.npmInstall();
    fs.chmodSync('build/bin/npm-postinstall.sh', '0777');
  },
});
