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
    message: 'What is the library\s name?'
  }, {
    name: 'libraryDescription',
    message: 'What does this library do?'
  }, {
    type: 'confirm',
    name: 'useBower',
    message: 'Do you want to use Bower?',
    default: true
  }];


module.exports = yeoman.generators.Base.extend({
  init: function () {
    this.on('end', function () {
      this.npmInstall();
    });
  },

  askFor: function () {
    var done = this.async();

    this.prompt(prompts, function (props) {
      this.libraryName = props.libraryName;
      this.libraryDescription = props.libraryDescription;
      this.useBower = props.useBower;
      this.userName = props.userName;
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
    this.copy('Gruntfile.js', 'Gruntfile.js');
  },

  templates: function () {
    this.template('.gitignore', '.gitignore');

    if (this.useBower) {
      this.copy('bower.json', 'bower.json');
    }

    this.template('build-bin-npm-postinstall.sh', 'build/bin/npm-postinstall.sh');
    this.template('build-configs-karma.js', 'build/configs/karma.js');
    this.template('package.json', 'package.json');
    this.template('readme.md', 'readme.md');
  },

  writes: function () {
    this.write('src/' + this.libraryName + '.js', '');
    this.write('test/' + this.libraryName + '.js', '');
  },

  finalise: function () {
    fs.chmodSync('build/bin/npm-postinstall.sh', '0777');
  }
});
