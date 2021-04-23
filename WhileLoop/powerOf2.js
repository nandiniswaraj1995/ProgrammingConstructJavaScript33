/*Write a program that takes a command-line argument n and prints a
table of the powers of 2 that are less than or equal to 2^n till 256 is
reached.*/
let number= process.argv[2];
let i=0;
let power =1;
while(i < number)
    {
     power = power * 2;
    i++;
    console.log("2 ^ "+ i +" = "+power);
    if(power==256)
      {
        break;
      }
}
