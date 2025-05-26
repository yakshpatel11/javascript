// 44. Swap two numbers without using a third variable.

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
document.writeln("After swapping, the first number is: " + num1);
document.writeln("After swapping, the second number is: " + num2);
