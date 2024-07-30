// stone paper scissor
let arr = ['stone', 'paper', 'scissors'];
let value;
function random_value(arr){
  value = Math.floor(Math.random() * arr.length);
  return arr[value];
}
let computer = random_value(arr);
let user = prompt("Choose stone, paper or scissors");
function match(computer, user){
  if(computer == user){
    return "Tied";
  }
  else if(computer == "stone" && user == "scissors"){
    return "Computer wins";
  } else if(computer=="stone" && user=="paper"){
    return "User wins";
  } else if(computer=="paper" && user=="stone"){
    return "Computer wins";
  } else if(computer=="paper" && user=="scissors"){
    return "User wins";
  } else if(computer=="scissors" && user=="paper"){
    return "Computer wins";
  } else if(computer=="scissors" && user=="stone"){
    return "User wins"; 
  } else{
    return "invalid input."
  }
}
let result = match(computer, user);
document.write(`Computer: ${computer} User: ${user} <br> Result: ${result}`);