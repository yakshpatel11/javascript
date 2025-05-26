// 45. Find whether a number is Armstrong or not (e.g., 153 = 1³ + 5³ + 3³).

let number = parseInt(prompt("Enter a number:"));
let sum = 0;
let temp = number;
let digits = number.toString().length;
for (let i = 0; i < digits; i++) {
    let digit = temp % 10;
    sum += Math.pow(digit, digits);
    temp = Math.floor(temp / 10);
}
if (sum == number) {
    document.writeln(number + " is an Armstrong number.");
} else {
    document.writeln(number + " is not an Armstrong number.");
}
