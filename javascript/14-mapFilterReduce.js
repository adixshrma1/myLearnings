let arr = [9,8,7,4,5,6,3,2,1];
// Map
// let arr2 = arr.map((value, index, array)=>{         // similar to forEach but it returns a new array. It can take 3 values or less
//     console.log(`${index} ${value} ${array}`);
//     return value + 1;
// })
// console.log(arr2);      // map created a new array and stored it in arr2.

// Filter
// let arr3 = [11,89,65,32,1,2,3,4,5];
// let arr4 = arr3.filter((value)=>{       // filter out and store it in a new array.
//     if(value<10){                   // Or you can simply write "return value<10"
//         return value;
//     }
// })
// console.log(arr4);

// Reduce
let value = arr.reduce((v1, v2)=>{       // reduce an array into single value. Takes a funct as arguement.
    return v1 + v2;
})
console.log(value);