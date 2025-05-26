//7. Find the sum of digits in a number (e.g., 4321 → 4+3+2+1 = 10).

let number = prompt("Enter a number to find the sum of its digits:");
let sum = 1;
while (number > 0) {
    sum += number % 10;
    number = Math.floor(number / 10);
}
document.writeln("The sum of the digits is: " + sum);