class Animal{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }
    speak(){
        console.log(`${this.name} is speaking...`)
    }
    eat(){
        console.log(`${this.name} is eating...`)
    }
}
class Monkey extends Animal{
    constructor(name, color, taillength){
        super(name, color);
        this.taillength = taillength;
    }
    jump(){
        console.log(`${this.name} is jumping...`)
        console.log(`the length of tail is ${this.taillength}`)
    }
}

let dog = new Animal('vicky', 'brown');
dog.speak();
dog.eat();
let monkey = new Monkey('kaalu', 'black', 45);
monkey.jump();