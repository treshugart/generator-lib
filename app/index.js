'use strict';

var chalk = require('chalk');
var fs = require('fs');
var path = require('path');
var util = require('util');
var yeoman = require('yeoman-generator');
var prompts = [{
    name: 'userName',
    message: 'What is your name?'
  }, {
    name: 'libraryName',
    message: 'What is the library\'s name?'
  }, {
    name: 'libraryDescription',
    message: 'What does this library do?'
  }, {
    name: 'gitUsername',
    message: 'What is your git username? Leave blank to not initialise as a git repository.'
  }, {
    name: 'gitRemote',
    message: 'Which git remote do you want to use?',
    default: 'git@github.com'
  }];


module.exports = yeoman.generators.Base.extend({
  askFor: function () {
    var done = this.async();

    this.prompt(prompts, function (props) {
      this.libraryName = props.libraryName;
      this.libraryDescription = props.libraryDescription;
      this.userName = props.userName;
      this.gitUsername = props.gitUsername;
      this.gitRemote = props.gitRemote;
      done();
    }.bind(this));
  },

  dirs: function () {
    this.mkdir('build');
    this.mkdir('build/bin');
    this.mkdir('build/configs');
    this.mkdir('build/tasks');
    this.mkdir('src');
    this.mkdir('test');
  },

  copies: function () {
    this.copy('.editorconfig', '.editorconfig');
    this.copy('.jscsrc', '.jscsrc');
    this.copy('.jshintrc', '.jshintrc');
    this.copy('build-configs-index.js', 'build/configs/index.js');
    this.copy('build-configs-requirejs.js', 'build/configs/requirejs.js');
    this.copy('Gruntfile.js', 'Gruntfile.js');
  },

  templates: function () {
    this.template('.gitignore', '.gitignore');
    this.copy('bower.json', 'bower.json');
    this.template('build-bin-npm-postinstall.sh', 'build/bin/npm-postinstall.sh');
    this.template('build-configs-karma.js', 'build/configs/karma.js');
    this.template('package.json', 'package.json');
    this.template('readme.md', 'readme.md');
  },

  writes: function () {
    this.template('src-libmain.js', 'src/' + this.libraryName + '.js');
    this.template('src-libtest.js', 'test/' + this.libraryName + '.js');
  },

  gitInit: function () {
    var that = this;

    if (this.gitUsername) {
      var done = this.async();

      this.spawnCommand('git', ['init']).on('exit', function() {
        that.spawnCommand('git', ['remote', 'add', 'origin', that.gitRemote + ':' + that.gitUsername + '/' + that.libraryName]).on('exit', done);
      });
    }
  },

  finalise: function () {
    this.npmInstall();
    fs.chmodSync('build/bin/npm-postinstall.sh', '0777');
  },
});
