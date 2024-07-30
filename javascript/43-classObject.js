class Player{
    constructor(name,health){
        this.name = name;
        this.health = health;
    }
    showName(){
        console.log(`Player's Name: ${this.name}`);
    }
    showHealth(){
        console.log(`${this.name}'s health is ${this.health}`)
    }
}
let tommy = new Player('Tommy', 100);
tommy.showName();
tommy.showHealth();
let lance = new Player('Lance', 40);
lance.showName();
lance.showHealth();
let padestrian = new Player('Padestrian', 20);
padestrian.showHealth();
