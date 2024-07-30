function add(a, b){
    return a+b;
}
function sub(a, b){
    return a-b;
}
function mult(a, b){
    return a*b;
}
function div(a, b){
    if(b != 0){
        return a/b;
    }
    console.log('divide by zero error.');
}
function calculate(a, b, callback){
    return callback(a, b);
}
console.log(calculate(45,5,add));
console.log(calculate(45,5,sub));
console.log(calculate(45,5,mult));
console.log(calculate(45,5,div));