// 29. Find whether a number is divisible by both 3 and 5.

let number = prompt("Enter a number:");
if (number % 3 == 0 && number % 5 == 0) {
    document.writeln("The number is divisible by both 3 and 5.");
}
else if (number % 3 == 0) {
    document.writeln("The number is divisible by 3.");
} 
else if (number % 5 == 0) {
    document.writeln("The number is divisible by 5.");
}
else {
    document.writeln("The number is not divisible by either 3 or 5.");
}
