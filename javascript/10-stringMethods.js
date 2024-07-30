let str = 'Aditya Sharma';
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.charAt(3));
console.log(str.slice(7,13));      // 13 is not included.
console.log(str.slice(7));
console.log(str.replace("Aditya", "Vikas"));        // only replace first occurance
console.log(str.concat(" is a nice coder"));

let str2 = "   vikas rajput   ";
console.log(str2.trim());
console.log(str2.trimStart());
console.log(str2.trimEnd());

let arr = str.split(" ");
let arr2 = str.split('');
console.log(arr);
console.log(arr2);

let str3 = "this is a string";      // printing using for loop.
let ans = "";
for(let i=0; i<str3.length; i++){
    ans = ans + str3[i];
}
console.log(ans);

let str4 = '1000 anything';
let num = Number.parseInt(str4);
console.log(num);                     // gives number from the given string.