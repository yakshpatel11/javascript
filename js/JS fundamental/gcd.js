// 32. Find GCD (HCF) of two numbers using a loop.

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let gcd = 1;
let min = Math.min(num1, num2);
for (let i = 1; i <= min; i++) {
    if (num1 % i == 0 && num2 % i == 0) {
        gcd = i;
    }
}
document.writeln("The GCD of " + num1 + " and " + num2 + " is: " + gcd);