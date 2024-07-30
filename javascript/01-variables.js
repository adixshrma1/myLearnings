var a = 56;     // it was used in old codes. it can be changed from anywhere cuz it's scope is global. NOT RECOMMENDED.
let b = 65;     // it's scope is in block. value can be changed, type can be changed.
console.log(b);
b = 'string';
console.log(b);
{
const c = 100;      // Cant be changed and must be initialized. Scope is in block.
//c = 'string';    // Error!
// const a;         // error!
console.log(c);
}
// console.log(c);       // Error! because of the scope of variable "c" only exist inside the {} bracket.

