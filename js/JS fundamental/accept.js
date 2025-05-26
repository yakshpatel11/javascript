// 57. Accept N numbers and find how many are divisible by 2, 3, and 5.

let n = parseInt(prompt("Enter the number of elements:"));
let divisibleBy2 = 0;
let divisibleBy3 = 0;
let divisibleBy5 = 0;
let divisibleBy2And3 = 0;
let divisibleBy2And5 = 0;

for (let i = 0; i < n; i++) {
    let num = parseInt(prompt("Enter number " + (i + 1) + ":"));
    if (num % 2 == 0) {
        divisibleBy2++;
    }
      if (num % 3 == 0) {
        divisibleBy3++;
    }
      if (num % 5 == 0) {
        divisibleBy5++;
    }

}