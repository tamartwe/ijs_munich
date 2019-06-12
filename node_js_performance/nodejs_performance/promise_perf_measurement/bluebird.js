console.time('test bluebird');
const P = require('bluebird');
let p = P.resolve('done');
for (let i = 0; i < 1000000; i++) {
    p = p.then(a => new P((res, rej) => res(a)));
}
p.then(() => {
    console.log;
    console.timeEnd('test bluebird');
});
