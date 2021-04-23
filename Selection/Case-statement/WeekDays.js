//Read a single digit number and write the number in word

let day=Math.floor(Math.random()*7)+1;
console.log("day in number "+day+" and in words :");
switch(day)
{
case 1:
       console.log("Sunday");
       break;
case 2:
       console.log("Monday");
       break;
case 3:
       console.log("Tuesday");
       break;
case 4:
       console.log("Wednesday");
       break;
case 5:
       console.log("Thusday");
       break;
case 6:
       console.log("Friday");
       break;
case 7:
       console.log("Saturday");
       break;
default:
    console.log("oops!!");
    break;
}
