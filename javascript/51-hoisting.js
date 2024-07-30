// these two lines will run without error due to HOISTING.
console.log(a);
greet();
function greet(){
    console.log('hello guys');
}
var a = 50;         // declaration hoisted to the top but not initialisation. So, it is undefined until assignment occurs.
console.log(a);

// function expressions is not hoisted.
// fun();                       // hence it will not work.
// var fun = function(){
//     console.log('Im a fun function...')
// }

// hoisting will not work in case of let and const.