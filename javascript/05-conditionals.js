// if else syntax.

let num = 100;
if(num>100){
    console.log("number is greater than 100");
}
else if(num<100){
    console.log("Number is less than 100");
}
else{
    console.log("The number is equal to 100");
}

// switch syntax revision.

let fruit = "banana";
switch(fruit){
    case "apple":
        console.log("100 rupey kilo");
        break;
    case "mango":
        console.log("mango is 50 rupey kilo");
        break;
    case "banana":
    case "chiku":
        console.log("banana and chiku are 60 rupey kilo");
        break;
    default:
        console.log("we dont have this item.")
}