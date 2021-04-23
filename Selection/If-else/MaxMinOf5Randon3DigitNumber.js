//      Write a program that reads 5 Random 3 Digit values 
//             and then outputs the minimum and the maximum value
let max=0;min=0;
let number1 = Math.floor(Math.random() * 900) + 100;
let number2 = Math.floor(Math.random() * 900) + 100;
let number3 = Math.floor(Math.random() * 900) + 100;
let number4 = Math.floor(Math.random() * 900) + 100;
let number5 = Math.floor(Math.random() * 900) + 100;

console.log("allnumbers are  :  "+number1+"  "+number2+"  "+"  "+number3+"  "+number4+"  "+number5);

 if(number1 > number2 && number1 > number3 && number1 > number4 && number1 > number4)
{
     max = number1;
 }
if(number2 > number3 && number2 > number4 && number2 > number5)
{
     max = number2;
 }
if(number3 > number4 && number3 > number5 )
{
     max = number3;
 }
if(number4 > number5 )
{
     max = number4;
 }
else
{
 max = number5;
}
 

 if(number1 < number2 && number1 < number3 && number1 < number4 && number1 < number4)
{
     min = number1;
 }
if(number2 < number3 && number2 < number4 && number2 < number5)
{
     min = number2;
 }
if(number3 < number4 && number3 < number5 )
{
     min = number3;
 }
if(number4 < number5 )
{
     min = number4;
 }
else
{
 min = number5;
}
 
console.log("minimum value  =  "+min);
console.log("maximum value  =  "+max);
