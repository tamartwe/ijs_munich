function myClass(p,q,r) {
  this.p = p;
  this.q = q;
  this.r = r;
}

console.time('test no class');
for (var i = 0; i < 1000000; i++) {
  const a = {p : 2, q : 'something else', r: true }
}
console.timeEnd('test no class'); 


console.time('test class');
for (var i = 0; i < 1000000; i++) {
  const a = new myClass( 2,'something else',true)
}
console.timeEnd('test class'); 


