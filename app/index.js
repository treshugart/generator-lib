'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


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
      //this.spawnCommand('npm' ['install']);
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
    this.copy('build-config-index.js', 'build/config/index.js');
    this.copy('Gruntfile.js', 'Gruntfile.js');
  },

  templates: function () {
    this.template('.gitignore', '.gitignore');

    if (this.useBower) {
      this.copy('bower.json', 'bower.json');
    }

    this.template('build-bin-npm-postinstall.sh', 'build/bin/npm-postinstall.js');
    this.template('package.json', 'package.json');
    this.template('readme.md', 'readme.md');
  },

  writes: function () {
    this.write('src/' + this.libraryName + '.js');
    this.write('test/' + this.libraryName + '.js');
  }
});
