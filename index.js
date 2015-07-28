'use strict';

var fs = require('fs');
var streamBuffers = require('stream-buffers');

module.exports = function readFd(fd, cb) {
  if (!(fd && cb)) {
    return;
  }

  var bufferStream = new streamBuffers.WritableStreamBuffer();
  var fileStream = fs.createReadStream(null, {fd: fd});

  bufferStream.on('error', cb);
  fileStream.on('error', cb);

  fileStream.pipe(bufferStream).on('finish', function () {
    cb(null, bufferStream.getContents());
  });
};
