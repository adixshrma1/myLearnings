// Problem 1 :- take user input and add it in an array.
// const prompt = require('prompt-sync')();
// let arr = [4,2,5,6,3,9,1,8,7];
// let n = prompt("enter a num");           // note: this prompt will only work in browser or in replit.
// n = Number.parseInt(n);
// arr.push(n);
// console.log(arr);

// Problem 2 :- Add until user types 0
// let arr = [4,2,5,6,3,9,1,8,7];
// let n;
// while(n!=0){
//   n = prompt("enter a number");
//   n = Number.parseInt(n);
//   arr.push(n);
// }
// console.log(arr);

// Problem 3 :- filter element divisible by 10
// let arr = [10,12,20,60,90,32,65,48];
// let a = arr.filter((value)=>{
//   return value%10==0;
// });
// console.log(a);

// Problem 4 :- create an array the contain square of numbers.
// let arr = [];
// for(let i=0; i<5; i++){
//   let num = prompt("enter a number: ");
//   arr.push(num);
// }
// let arr2 = arr.map((element)=>{
//   return element*element;
// })
// console.log(arr);
// console.log(arr2);

// Problem 5 :- use reduce to print factorial.
// console.log("Find factorial");
// let num = prompt("enter a number: ");
// let arr = [];
// for(let i=1; i<=num; i++){
//   arr[i-1] = i;
// }
// let value = arr.reduce((num1, num2)=>{
//    return num1*num2;
// })
// console.log(value);

// Note: this will only work in replit.