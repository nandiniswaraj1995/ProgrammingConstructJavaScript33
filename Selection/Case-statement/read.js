//Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...
//console.log("Enter  value in unit format 1,10,100,1000 etc  : ")
//let value =  process.argv[2];
//console.log("Entered value : "+value );

let r1 = require('readline');
let prompts = r1.createInterface(process.stdin, process.stdout);
prompts.question("enter value in unit format 1,10,100,1000 etc  : ", function (value) {

switch(value)
{
case 1:
   console.log("unit");
   break;
case 10:
   console.log("Ten");
   break;
case 100:
   console.log("Hundred");
   break;
case 1000:
   console.log("Thousand");
   break;
default :
   console.log("Invalid choice!");
   break;
}

process.exit();
}); 
