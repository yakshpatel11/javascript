// 4. Find the factorial of a number using a loop.
let number = prompt("Enter a number to find its factorial:");
let factorial = 1;
for (let i = 1; i <= number; i++) {{
    factorial *= i;
}}
document.writeln("The factorial of " + number + " is: " + factorial);