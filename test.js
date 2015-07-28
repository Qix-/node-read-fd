'use strict';
// jshint mocha:true

require('should');

var fs = require('fs');
var readFd = require('./');

it('should successfully read a buffer from a file descriptor', function(done) {
  fs.open('fixture/hello', 'r', function(err, fd) {
    if (err) {
      return done(err);
    }

    readFd(fd, function(err, buffer) {
      if (err) {
        return done(err);
      }

      buffer.should.be.an.instanceof(Buffer);
      buffer.toString().should.equal('Hello, mate!\n');
      buffer.length.should.equal(13);
      done();
    });
  });
});
