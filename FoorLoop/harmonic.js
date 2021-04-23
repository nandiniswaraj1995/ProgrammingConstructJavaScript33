//Write a program that takes a command-line argument n and 
// prints the nth harmonic number. Harmonic Number is of the form.

let number= process.argv[2];
console.log("Entered  number is : "+number);
    var result = 0;
    var string = "";
    for(i = 1; i <= number; i++)
    {
         result = result + 1/i;
        string = string + " + 1/"+i;
    }
    console.log("H(n) = "+string+" = "+result);
   