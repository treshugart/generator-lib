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
    this.template('.editorconfig', '.editorconfig');
    this.template('.gitignore', '.gitignore');
    this.template('.jscsrc', '.jscsrc');
    this.template('.jshintrc', '.jshintrc');
    this.template('bower.json', 'bower.json');
    this.template('build-bin-npm-postinstall.sh', 'build/bin/npm-postinstall.sh');
    this.template('build-configs-availabletasks.js', 'build/configs/availabletasks.js');
    this.template('build-configs-cssmin.js', 'build/configs/cssmin.js');
    this.template('build-configs-index.js', 'build/configs/index.js');
    this.template('build-configs-jscs.js', 'build/configs/jscs.js');
    this.template('build-configs-jshint.js', 'build/configs/jshint.js');
    this.template('build-configs-karma.js', 'build/configs/karma.js');
    this.template('build-configs-less.js', 'build/configs/less.js');
    this.template('build-configs-shell.js', 'build/configs/shell.js');
    this.template('build-configs-uglify.js', 'build/configs/uglify.js');
    this.template('build-configs-watch.js', 'build/configs/watch.js');
    this.template('build-configs-wrap.js', 'build/configs/wrap.js');
    this.template('build-tasks-default.js', 'build/tasks/default.js');
    this.template('build-tasks-dist.js', 'build/tasks/dist.js');
    this.template('build-tasks-install.js', 'build/tasks/install.js');
    this.template('build-tasks-lint.js', 'build/tasks/lint.js');
    this.template('build-tasks-test.js', 'build/tasks/test.js');
    this.template('Gruntfile.js', 'Gruntfile.js');
    this.template('package.json', 'package.json');
    this.template('readme.md', 'readme.md');
    this.template('src-main.js', 'src/main.js');
    this.template('src-main.less', 'src/main.less');
    this.template('test-lib-helpers.js', 'test/lib/helpers.js');
    this.template('test-lib-polyfills.js', 'test/lib/polyfills.js');
    this.template('test-unit-main.js', 'test/unit/main.js');
    this.template('test-unit.js', 'test/unit.js');
  },

  finalise: function () {
    this.npmInstall();
    fs.chmodSync('build/bin/npm-postinstall.sh', '0777');
  },
});
