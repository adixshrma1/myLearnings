let p1 = new Promise((resolve, reject)=>{
    console.log('promise 1 is pending.')
    setTimeout(()=>{
        resolve(10);
    }, 5000);
});
let p2 = new Promise((resolve, reject)=>{
    console.log('promise 2 is pending.')
    setTimeout(()=>{
        reject(new Error('some error has occured.'));
    }, 5000);
});

p1.then((value)=>{
    console.log(value);
});
// p2.catch((error)=>{
//     console.log(`Error: ${error.message}`)
// });
p2.then((value)=>{
    console.log(`The value of promise 2 is ${value}`);
}, (error)=>{
    console.log(`Error: ${error.message}`)
});
