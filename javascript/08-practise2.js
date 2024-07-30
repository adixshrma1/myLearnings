const marks = {
    Aditya: 56,
    Deepak: 89,
    Aman: 78
};
// using for loop.
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]]);
}

// using for in.
for(let a in marks){
    console.log("marks of " + a + " is " + marks[a]);
}
