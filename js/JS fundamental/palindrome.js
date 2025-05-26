//8. Check whether a number is a palindrome (same forward and backward).
let number = prompt("Enter a number to check if it's a palindrome:");
let originalNumber = number;
let reversedNumber = 0;
while (number > 0) {
    let digit = number % 10;
    reversedNumber = reversedNumber * 10 + digit;
    number = Math.floor(number / 10);
}
if (originalNumber == reversedNumber) {
    document.writeln(originalNumber + " is a palindrome.");
} else {
    document.writeln(originalNumber + " is not a palindrome.");
}