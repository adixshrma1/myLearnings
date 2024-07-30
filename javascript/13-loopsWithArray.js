arr = [2,5,8,9,6,3,1,4,7];
// for loop
// for(let i=0; i<arr.length; i++){
//     console.log(arr[i]);
// }

// for each loop
arr.forEach((element)=>{        // forEach takes function as arguement. It can take 3 arguement (value, index, array)
    console.log(element);
});
arr.forEach((element)=>{        // example 2
    console.log(element*element);
});

// // Array.from
// let str = "Aditya";
// let arr2 = Array.from(str);
// console.log(arr2);

// for of
// for(let element of arr){            // short cut for printing all elements
//     console.log(element);
// }

// for in   (it iterates over enumerable properties of an object)
obj = {
    name: "Aditya",
    age: 20,
    city: "Delhi"
}
for(let key in obj){                // it prints keys in array.
    console.log(key, obj[key]);
}