// 10. Print all prime numbers between 1 and 100.

let primeNumbers = [];
for (let num = 2; num <= 100; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }

    }
    if (isPrime) {
        primeNumbers.push(num);
    } 
}
document.writeln("The prime numbers between 1 and 100 are: " + primeNumbers.join(", "));