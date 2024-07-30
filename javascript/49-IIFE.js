// immediately invoked function expression.

async function fun(){
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve(56);
        }, 2000)
    })
}
(async()=>{                 
    let a = await fun();
    console.log(a)
    let b = await fun();
    console.log(b)
    let c = await fun();
    console.log(c)
})();
