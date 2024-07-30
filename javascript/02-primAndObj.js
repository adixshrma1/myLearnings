// NN BB SS U

let a = null;
let b = 45;     // number.
let c = true;   // boolean.
let d = BigInt(456) + BigInt(4);       // big int.
let e = 'String';       // string.
let f = Symbol('I am a symbol.');       // symbol.
let g;    // undefined value. (by default)
console.log(a, b, c, d, e, f, g);
console.log(typeof f);

// objects

const obj = {
    key1: 'rohan',
    key2: false,
    age: 67,
}
console.log(obj.key1, obj.age);
console.log(obj["key1"]);