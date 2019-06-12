console.time('test native');
const P = Promise;
let p = P.resolve('done');
for (let i = 0; i < 1000000; i++) {
  p = p.then(a => new P((res, rej) => res(a)));
}
p.then(() => {
  console.log;
  console.timeEnd('test native'); 
});
