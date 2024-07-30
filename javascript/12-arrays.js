// // Basics.
// let arr = [1 ,5 ,9 ,8 ,null , false];       // in JS you can store different types of values in an array.
// console.log(arr);
// console.log(arr[3]);
// console.log(arr.length);

// arr[4] = 99;        // Values can be changed.
// console.log(arr);

// arr[6] = 100;       // new values can be added.
// console.log(arr)

// array methods
// let arr2 = [4,5,6,9,7,40];
// let b = arr2.toString();
// console.log(b , typeof b);
// let c = arr2.join("-");              // join() method joins all the elements with
// console.log(c, typeof c);
// let d = arr2.push(45);          // insert new value in array and returns arr.length
// console.log(arr2, d);
// let e = arr2.pop();             // remove last element from array and return removed element
// console.log(arr2, e);
// let f = arr2.shift();           // removes first element from array and returns it
// console.log(arr2, f);
// let g = arr2.unshift(100);      // add element in beginning and return length.
// console.log(arr2, g);


// Some more Array methods.
let arr3 = [3,2,4,6,9,78,12,36];
// let arr4 = ['a','b','c','d'];
// let arr5 = arr3.concat(arr4);
// console.log(arr5);

// delete arr3[2];         // it will delete particular element, arr length remain same
// console.log(arr3, arr3.length);

// arr3.sort();            // it will sort the original array, alphabetically.
// console.log(arr3);

function compare(a,b){
    return a-b;
}

arr3.sort(compare);     // this allows sorting numerically.
console.log(arr3);

// arr3.reverse();             // modify the array, reverse order. (alphabetically)
// console.log(arr3);

// console.log(arr3);
// let arr4 = arr3.splice(2,4,1024,1024,1024,1024);               // It modifies the original array and it returns arr of deleted elements.
// // splice(start index, how many to remove, item1,item2...)
// console.log(arr4);
// console.log(arr3);

// let i = arr3.slice(2,6);        // args contain indexes.
// console.log(i);                  // slice() method just extracts part of an array, dont modify original array.