// Question 1.
// async function fun(text){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(text);
//         }, 2000)
//     })
// }

// (async()=>{
//     let a = await fun('hello');
//     console.log(a);
//     let b = await fun('world');
//     console.log(b);
// })();

// // Question 2.
// let arr = [3,5,6,8];
// function avg(a,b,c){
//     return (a+b+c)/3;
// }
// console.log(avg(...arr));

// // Question 3
// async function fun(sec){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve('Promise Resolved...')
//         }, sec * 1000)
//     })
// }
// (async()=>{
//     let a = await fun(3);
//     console.log(a);
//     let b = await fun(2);
//     console.log(b);
// })();

// Question 4
function simpleInterest(p, r, t){
    return (p*r*t)/100;
}
console.log("Simple Interest is: "+simpleInterest(10000,  5, 3));