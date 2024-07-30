alert("write value of a.");
let a = prompt("enter value here: ", "50");
a = Number.parseInt(a);
let write = confirm("do you want to write on this page?");
if(write){
  document.write(a);
} else{
  alert("allow me to write")
}

// Note: this will only work in replit.