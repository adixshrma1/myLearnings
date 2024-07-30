class Employee{
    constructor(name, id){
        this.name = name;
        this.id = id;
    }
    login(){
        console.log(`${this.name} has logged in...`)
    }
    logout(){
        console.log(`${this.name} has logged out...`)
    }
    requestLeaves(leaves){
        console.log(`Request for ${leaves} leaves is submitted by ${this.name}.`);
        console.log('base class method.')
    }
}

class Programmer extends Employee{
    requestLeaves(leaves){
        super.requestLeaves(leaves);        // here we are calling base class method using super keyword.
        console.log('child class method.')
    }
}

let prg = new Programmer( 'John', 123456 );
prg.login();
prg.requestLeaves(2);