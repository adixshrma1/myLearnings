setTimeout(()=>{
    console.log("statement 1")
}, 1000);
setTimeout(()=>{
    console.log("statement 2")
}, 2000);
setTimeout(()=>{
    console.log("statement 3")
}, 3000);
// console.log(ravi);      // throw an error.
try{
    console.log(rahul);
} catch(err){
    console.error(`Error: ${err}`);
}
setTimeout(()=>{
    try{
        console.log(Ravi);      // throw an error.
    } catch(err){
        console.log("Error: "+ err);
    }
    
}, 4000);