// // Destructuring...
// let arr = [4,5,6,7,8,9,10];
// let [a, b] = arr;
// console.log(a, b);

// let [a, b, c, ...rest] = arr;
// console.log(a, b, c, rest)

// let [a, ,b, ...rest] = arr;     // now b will have the value of arr[2].
// console.log(a, b, rest);

// let {a, b} = {a: 1, b:2};
// console.log(a,b);

// Spread Syntax...
let arr = [4,5,6,7];
// let obj = {...arr};
// console.log(obj);

function sum(a, b, c){
    return a + b + c;
}
console.log(sum(...arr));   // it is equivalent to writing sum(4,5,6).

let obj = {
    name: 'aditya',
    company: 'zomato',
    address: 'prem nagar'
}
console.log({...obj, company: 'google', address: 'usa'});