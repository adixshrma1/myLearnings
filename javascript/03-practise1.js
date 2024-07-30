// create a string and add a no. to it.
let str = "Ravi";
let num = 45;
console.log(str + num);
console.log(typeof (str+num));


const obj = {
    name: 'Aditya',
    age: 22,
    isMarried: false
}
obj.name = "Devvrat";       // you can change values of one of its properties.
console.log(obj.name);

obj["adress"] = "A-28";     // you can add a new property. Delete a property,.
// obj.address = "A-38";    // another way or syntax.
console.log(obj);

// obj = "string";       // this is not allowed, ie Re-assigning is not allowed.
// obj = {};    