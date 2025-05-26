// 30. Use ternary operator to find the largest among 2 numbers.

let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let largest = (num1 > num2) ? num1 : num2;
document.writeln("The largest number is: " + largest);
