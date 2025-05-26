// 27. Create a program that accepts a number and tells if it's a single, double, or triple-digit number.

let number = prompt("Enter a  number:");
if (number >= 0 && number < 10) {
    document.writeln("The number is a single-digit number.");
}
else if (number >= 10 && number < 100) {
    document.writeln("The number is a double-digit number.");
}
else if (number >= 100 && number < 1000) {
    document.writeln("The number is a triple-digit number.");
}
else {
    document.writeln("The number is not a single, double, or triple-digit number.");
}