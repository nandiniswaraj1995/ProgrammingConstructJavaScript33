//Write a program that takes a command-line argument n and 
// prints a table of the powers of 2 that are less than or equal to 2^n.

let number= process.argv[2];
console.log("Entered  number is : "+number);

let power = 1;
    for(i = 1; i <= number; i++)
    {
        power = power* 2;
     }
 console.log("2 the power of "+number+" : "+power)
    

