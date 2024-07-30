let str = "a dog is a pet animal";
let word = "dog";
console.log(`the word "${word}" ${(str.includes(word))? "is": "is not"} present in the sentence`);

console.log(str.startsWith("a"));
console.log(str.endsWith("l"));

let str2 = "It costs Rs1000";
let num = Number.parseInt(str2.slice(11));
console.log(num);