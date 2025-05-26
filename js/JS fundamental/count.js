// 6. Count the number of digits in a given number.
let number = prompt("Enter a number to count its digits:");
let count = 0;
while (number > 0) {
    number = Math.floor(number / 10);
    count++;
}
document.writeln("The number of digits is: "+ count);