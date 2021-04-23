/*Extend the program to take a range of number as input and output the Prime
Numbers in that range.*/

let startNumber = process.argv[2];
let endNumber = process.argv[3];

for (let i = startNumber; i <= endNumber; i++) {
	let prime = true;
	for (let j = 2; j <= Math.sqrt(i); j++) {
		if (i % j == 0) {
			prime = false;
			break;
		}
	}
	if (prime && i != 1) {
		console.log(i);
	}
}
