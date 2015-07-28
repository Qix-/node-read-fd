# node-read-fd [![Travis-CI.org Build Status](https://img.shields.io/travis/Qix-/node-read-fd.svg?style=flat-square)](https://travis-ci.org/Qix-/node-read-fd) [![Coveralls.io Coverage Rating](https://img.shields.io/coveralls/Qix-/node-read-fd.svg?style=flat-square)](https://coveralls.io/r/Qix-/node-read-fd)
Read a file descriptor entirely into a buffer

## Example
```javascript
var readFd = require('read-fd');

readFd(fd, function (err, buffer) {
  /* ... */
});
```

## License
Licensed under the MIT license
