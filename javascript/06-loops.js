// for loop
// for(let i=0; i<=10; i++){
//     console.log(i);
// }

// // factorial program.
// let ans = 1;
// for(let i=1; i<=5; i++){
//     ans = ans * i;
// }
// console.log(ans);

// for in loop
const obj = {
    Aditya: 45,
    Ravi: 78,
    Deepak: 96
};
for(let i in obj){
    console.log("marks of ", i, "is " , obj[i]);
}

// for of loop      // used for iterable items strings, arrays etc.
const arr = [1,5,6,9,78];
for(let i of arr){
    console.log(i);
}

// // while loop
// let j = 10;
// while(j>0){
//     console.log(j);
//     j--;
// }

// do while.