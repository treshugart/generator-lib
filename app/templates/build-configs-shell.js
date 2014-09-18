module.exports = function (grunt) {
  var traceurCommand = './node_modules/traceur/traceur --modules=inline ';

  return {
    dist: {
      command: traceurCommand + '--out dist/<%= cwd %>.js --module src/main.js'
    },
    installBower: {
      command: './node_modules/.bin/bower install'
    },
    installTraceur: {
      command: 'cd ./node_modules/traceur && npm install'
    },
    test: {
      command: traceurCommand + '--out .tmp/run-unit-tests.js --module test/unit.js'
    }
  };
};
