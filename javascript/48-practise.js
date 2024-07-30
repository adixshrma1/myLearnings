// question 1 and 2.
class Complex{
    constructor(real, imaginary){
        this.real = real;
        this.imaginary = imaginary;
    }
    show(){
        console.log(`The complex number is: ${this.real} + ${this.imaginary}i`)
    }
    add(num){
        this.real += num.real;
        this.imaginary += num.imaginary;
    }
    get Real(){
        return this.real;
    }
    get Imaginary(){
        return this.imaginary;
    }
    set Real(value){
        this.real = value;
    }
    set Imaginary(value){
        this.imaginary = value;
    }
    
}
// let a = new Complex(3,4);
// let b = new Complex(6,3);
// a.add(b);
// a.show();

// getter setter.
let num = new Complex(3,4);
num.Real = 10;
num.Imaginary = 10;

console.log(num.Real);
console.log(num.Imaginary);

// // question 3 and 4.
// class Human{
//     constructor(name){
//         this.name = name;
//     }
//     eat(){
//         console.log(`${this.name} is eating.`);
//     }
// }
// class Student extends Human{
//     constructor(name){
//         super(name);
//     }
//     eat(){
//         super.eat();
//         console.log(`A student named ${this.name} is eating.`);
//     }
// }
// let john = new Human("John");
// john.eat();
// let tom = new Student('Tom');
// tom.eat();
// console.log(tom instanceof Human);