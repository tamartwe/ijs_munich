console.time('test native');
var P = Promise;
var p = P.resolve('done');
for (var i = 0; i < 1000000; i++) {
  p = p.then(a => new P((res, rej) => res(a)));
}
p.then(() => {
  console.log;
  console.timeEnd('test native'); 
});
