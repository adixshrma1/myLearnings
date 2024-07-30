// try{
//     console.log(ravi);
// } catch(err){
//     console.log("Error: " + err);
//     console.log(err.name);
//     console.log(err.message);
// }

// try {
//     throw new ReferenceError('ravi to ghada hai...')
//   } catch (err) {
//     console.log("Error: " + err);
//     console.log(err.name);
//     console.log(err.message);
//     // console.log(err.stack);
//   }

// const prompt = require('prompt-sync')();
// try{
//     const age = prompt("enter your age: ");
//     if(age > 120){
//         throw new ReferenceError('this is probably not true...');
//     }
// } catch(err){
//     console.log("ERROR: "+ err);
// }

// finally.
function run(){
    try{
        // console.log(something);
        console.log('Program runs successfully...')
        return;         // no error, and we are returning the function, finally will still run.
    }
    catch(err){
        console.log('Error: ' + err);
        // console.log(something);     // error in catch block
    }
    finally{                                                                // error in try or catch, it will run.
        console.log('I run always, doesnt matter what happened...');
        // used in: closing file,
        // exit loop,
        // writing log files.
    }
}
run();