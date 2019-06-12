//console.time('test crypto sync');
var profiler = require('v8-profiler');
var fs = require('fs');
const crypto = require('crypto');
function hash(password) {
  const salt = crypto.randomBytes(128).toString('base64');
  const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');
  return hash;
}
// Imagine that loop below is real requests to some route
for (let i = 0; i < 50; i++) {
  hash('random_password');
}
//console.timeEnd('test crypto sync'); 