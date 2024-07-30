// Guess the number game (only work in replit)
const prompt = require('prompt-sync')();
let num = Math.random()*100;
num = Math.round(num);
let guess;
let tries = 0;
while(guess!=num){
  guess = prompt("Enter your guess: ");
  tries++;
  if(guess < num){
    console.log("Guess is less than number.");
  } else if(guess > num){
    console.log("Guess is greater than number.");
  }
}
let score = 100 - tries;
console.log("The number is: " + num);
console.log("Your tries: " + tries);
console.log("Score: " + score);