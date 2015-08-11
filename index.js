'use strict';

var through = require('through2');

module.exports = function(options) {
  return through.obj(function (file, enc, cb) {
    console.log('Generating files...');
    cb();
  });
};
