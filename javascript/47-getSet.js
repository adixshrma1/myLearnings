class Animal{
    constructor(name){
        this.name = name;
    }
    get Name(){
        return this.name;
    }
    set Name(newName){
        this.name = newName;
    }
}

class Rabbit extends Animal{
    constructor(name, color){
        super(name);
        this.color = color;
    }
}
let cat = new Animal("Whiskers");
console.log(cat.Name); // Output: Whiskers
cat.Name = "fluffy";
console.log(cat.Name); // Output: fluffy

let rabbit = new Rabbit('bruno', 'white');
console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);

