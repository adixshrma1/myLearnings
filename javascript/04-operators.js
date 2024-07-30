// arithmetic operators.
let a = 10;
let b = 4;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a ** b = ", a**b);     // a raise to the power b.
console.log("a / b = ", a/b);       // it gives ans in floating number.
console.log("a % b = ", a%b);

console.log("a++ ", a++);    // post increament.
console.log("++a ", ++a);   // pre increament.
// same for --

// assignment operators.
let c = 20;
c += 5;      // c = c + 5;
console.log(c);             // output: 25
// similarly.
// -=       x = x - y
// *=       x = x * y
// /=       x = x / y
// %=       x = x % y
// **=      x = x ** y

// comparison operator.
let d = 6;
let e = "6";
console.log("d==e ", d==e);     // == equal value.
console.log("d!=e ", d!=e);     // != not equal value.
console.log("d===e", d===e);    // === equal value and type.
console.log("d!==e", d!==e);   // !== not equal value or type.
// we know <, >, <=, >= 
// ? is ternary operator used to shorten if-else statement in one line.
let f = (3<7) ? 'yes' : 'no';
console.log(f);

// logical operator.
// && AND, || OR, ! NOT (already know)

/* bitwise operators.
 &	     they do bitwise operations on numbers, we have already done that and will do it later on (revise)
 |	     eg 0&1 is equal to 0
 ^	
 ~	
 <<	
 >>	
 >>> // it is unsigned right shift operator, it do not preserve the sign bit.	*/