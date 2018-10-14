var LIMIT = 10000000;
var buffer = new ArrayBuffer(LIMIT * 4);
var arr = new Int32Array(buffer);
console.time("TypedArray insertion time");
for (var i = 0; i < LIMIT ; i++ ) {
    arr[i] = i;
}
console.timeEnd("TypedArray insertion time");

var hetArr = new Array(LIMIT);
hetArr.push({a: 22});
console.time("Heterogenous array insertion time");
for (var i = 0; i < LIMIT; i++) {
    hetArr[i] = i;
}
console.timeEnd("Heterogenous array insertion time");
 