//Write a program to simulate a coin flip and print out "Heads" or "Tails" accordingly.

let roll = Math.floor(Math.random() *10) %2 +1;
if(roll == 1)
console.log("Heads")
else
console.log("Tails")
