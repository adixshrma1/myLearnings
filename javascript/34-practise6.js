// // Problem 3.
// function fun(){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(new Error('some error has occurred...'))
//         }, 3000);
//     });
// }
// async function fun2(){
//     try{
//         return await fun();
//     } catch(err){
//         console.log(err.message);
//     }
// }
// fun2();

// Problem 4
// let p4 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("I'm done!");
//     }, 1000)
// })
// let p5 = new Promise((resolve, reject)=>{
//     setTimeout(()=>{
//         resolve("I'm done!");
//     }, 3000)
// })
// async function fun(){
//     let all = await Promise.all([p4, p5]);
//     console.log(all);
// }
// fun();

let p1 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am P1");
        }, 1000)
    })
} 
let p2 = async ()=>{
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am P2");
        }, 5000)
    })
} 
async function p3(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("I am P3");
        }, 4000)
    })
} 
const run = async () =>{
    let a = p1();
    let b = p2();
    let c = p3();
    let all = await Promise.all([a, b, c]);
    console.log(all);
}
run();