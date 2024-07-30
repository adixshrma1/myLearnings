// some more on arrow functions
// const obj={
//     name: 'aditya',
//     role: 'junior developer',
//     company: 'microsoft',
//     fun: function(){
//         console.log(`My name is ${this.name} and Im a ${this.role}`)
//         let currentObj = this;        
//         setTimeout(function(){      
//             console.log(`My name is ${currentObj.name} and Im a ${currentObj.role}`)    // here 'this' will not work.
//         }, 2000);
//     }
// }
// obj.fun();

// if you use function inside another function then "this" will refer to window object.


// In case of arrow function
const obj={
    name: 'aditya',
    role: 'junior developer',
    company: 'microsoft',
    fun: function(){    
        setTimeout(()=>{      
            console.log(`My name is ${this.name} and Im a ${this.role}`)    // here 'this' will not work.
        }, 2000);
    }
}
obj.fun();
// arrow functions use lexical 'this' means they take it from parent function.