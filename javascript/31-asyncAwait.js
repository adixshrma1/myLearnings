let weather = async ()=>{
    let p1 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Delhi's whether is: 8 degree celcius.`);
        }, 2000)
    })
    let p2 = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve(`Banglore's whether is: 16 degree celcius.`);
        }, 4000)
    })
    // p1.then((value)=>{          // scenario 1
    //     console.log(value);
    // })
    // p2.then((value)=>{
    //     console.log(value);
    // })

    let a = await p1;           // scenario 2
    let b = await p2;
    console.log(`whether 1: ${a}`);
    console.log(`weather 2: ${b}`);
    return [a,b];
}
let cherry = async ()=>{
    console.log('hey im function cherry');      // this will be promise by default.
}

let main2 = async () =>{
    let a = await weather();
    let b = await cherry();
    return [a,b];
}
main2();
// weather().then((values)=>{
//     console.log(values);
// });
