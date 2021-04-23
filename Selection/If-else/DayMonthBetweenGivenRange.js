//    Write a program that takes day and month from the command line and prints 
//                true if day of month is between March 20 and June 20, false otherwise.


let month = process.argv[2];
let date = process.argv[3];
console.log("You Entered month : "+month)
console.log("You Entered Date : "+date)

     
  if( (month == 3 && date >= 20 && date <= 31 ) || (month == 4  && date > 1 && date <= 30) || (month == 5 && date >= 1 && date <= 31) || (month == 6 && date >= 1 && date <= 20))
    {    
      console.log("True");
     }
   else
      {
        console.log("False");
      }
           
