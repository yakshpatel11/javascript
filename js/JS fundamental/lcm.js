// 33. Find LCM of two numbers using a loop.

let num1 = parseInt(prompt("Enter the first number:"));
let num2 = parseInt(prompt("Enter the second number:"));
let lcm = 1;
let max = Math.max(num1, num2);
for (let i = max; i <= num1 * num2; i += max) {
    if (i % num1 == 0 && i % num2 == 0) {
        lcm = i;
        break;
    }
}
document.writeln("The LCM of " + num1 + " and " + num2 + " is: " + lcm);