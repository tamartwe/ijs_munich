console.time('test bluebird');
var P = require('bluebird');
var p = P.resolve('done');
for (var i = 0; i < 1000000; i++) {
    p = p.then(a => new P((res, rej) => res(a)));
}
p.then(() => {
    console.log;
    console.timeEnd('test bluebird');
});
