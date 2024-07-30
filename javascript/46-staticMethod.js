class Animal{
    constructor(name, color){
        this.name = Animal.capitalise(name);    // first use.
        this.color = color;
    }
    show(){
        console.log(`name of animal is: ${this.name}`);
        console.log(`color of animal is: ${this.color}`);
    }
    static capitalise(name){            // this is a static method
        return name.charAt(0).toUpperCase() + name.slice(1);
    }
}
let cat = new Animal('tom', 'blue');
cat.show();
console.log(Animal.capitalise("aditya"));    // second use.