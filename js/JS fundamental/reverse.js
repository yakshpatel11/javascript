// 3. Reverse a number (e.g., input: 12345 → output: 54321).
let number = prompt("Enter a number to reverse:");
let reversedNumber = "";
while (number.length > 0) {
    reversedNumber += number[number.length - 1];
    number = number.slice(0, -1);
}
document.writeln("Reversed number: " + reversedNumber);