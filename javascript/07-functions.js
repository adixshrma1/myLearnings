function sum(a, b){
    return a+b;
}
function cube(a){
    return a*a*a;
}
function print(){
    console.log("print function called...");
}
function print2(){
    return "this is print2";
}
console.log(sum(45,89));
console.log(cube(9));
print();
console.log(print2());
// print2();       // this won't do anything and will not create Error!.