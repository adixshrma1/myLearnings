// STRINGS ARE IMMUTABLE IN JS.

let name1 = "Ravi";
let name2 = 'Vikas';       // single quote
console.log(name1);
console.log(name1.length);
console.log(name1[3]);

// back tick.
let str = `${name1} is friend of ${name2}`;
console.log(str);

// escape char
// lets say you want to print 'Aditya's friend' js will confuse with single quotes.
// let str2 = 'Aditya's friend';   // wrong
let str2 = 'Aditya\'s friend';      // correct. Its escape char.
let str3 = "Aditya's friend";       // another way, thats why double and single quote is useful.
console.log(str2);
console.log(str3);
