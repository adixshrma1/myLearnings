let p1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 1");
    }, 1000)
})
let p2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 2");
        // reject(new Error("Error in Promise 2"));
    }, 2000)
})
let p3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve("Promise 3");
    }, 3000)
})

// let promise_api = Promise.all([p1, p2, p3]);        // when all are done, wont work with error.
// let promise_api = Promise.allSettled([p1, p2, p3]);     // works with errors too.
// let promise_api = Promise.race([p1, p2, p3]);       // which ever resolve first. Wont work with errors.
// let promise_api = Promise.any([p1, p2, p3]);        // works with errors too.


// let a = Promise.resolve(5);
let a = Promise.reject(new Error('some error has occured'));
a.then((values)=>{
    console.log(values);
}, (error)=>{
    console.log(`Error: ${error}`);
})