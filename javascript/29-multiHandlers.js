let p = new Promise((resolve, reject)=>{
    console.log('Promise is not resolved yet.')
    setTimeout(()=>{
        resolve("done");
    }, 2000);
})
p.then((value)=>{
    console.log(value) // "done"
    return new Promise((resolve, reject)=>{
        console.log('we are inside another promise.')
        setTimeout(()=>{
            resolve("another done")
        }, 2000)
    })
}).then((value)=>{
    console.log(value)// "another done"
})

p.then(()=>{                                // these are multiple handlers.
    console.log('statement 1 ...')
})
p.then(()=>{
    console.log('statement 2 ...')
})
p.then(()=>{
    console.log('statement 3 ...')
})