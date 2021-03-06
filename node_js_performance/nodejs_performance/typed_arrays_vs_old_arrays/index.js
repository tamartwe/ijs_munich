const LIMIT = 10000000;
const arr = new Int32Array(LIMIT);
console.time("TypedArray insertion time");
for (let i = 0; i < LIMIT ; i++ ) {
    arr[i] = i;
}
console.timeEnd("TypedArray insertion time");

const hetArr = new Array(LIMIT);
hetArr.push({a: 22});
console.time("Heterogenous array insertion time");
for (let i = 0; i < LIMIT; i++) {
    hetArr[i] = i;
}
console.timeEnd("Heterogenous array insertion time");


const conArr = new Array(LIMIT);
console.time("Regular array with continous mem allocation insertion time");
for (let i = 0; i < LIMIT; i++) {
    conArr[i] = i;
}
console.timeEnd("Regular array with continous mem allocation insertion time");
