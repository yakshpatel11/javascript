//9. Check if a number is prime.
let number = prompt("Enter a number to check if it's prime:");
let isPrime = true;
if (number <= 1) {
    isPrime = false;

}
for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i == 0) {
        isPrime = false;
        break;
    }

}
if (isPrime) {
    document.writeln(number + " is a prime number.");
} else {
    document.writeln(number + " is not a prime number.");
}