module.exports = function (grunt) {
  return {
    dist: {
      command: [
        'rm -rf dist',
        'mkdir dist',
        './node_modules/traceur/traceur-build --out dist/main.js --module src/main.js --modules=inline'
      ].join(' && ')
    }
  };
};
