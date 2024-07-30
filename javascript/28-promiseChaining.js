let p = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('done');
    }, 2000);
}).then((value)=>{
    console.log(value);
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(50);
        }, 2000);    
    });
}).then((value)=>{
    console.log(`Value is ${value}`); // Value is 50
    return new Promise((resolve, reject)=>{
        resolve(40);
    });
}).then((value)=>{
    console.log(value);
});