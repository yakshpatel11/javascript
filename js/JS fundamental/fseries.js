// 59. Check if input number is part of Fibonacci series.

let num = parseInt(prompt("Enter a number:"));
let a = 0;
let b = 1;
let isFibonacci = false;
if (num == a || num == b) {
    isFibonacci = true;

}
while (b <= num) {
    let c = a + b;
    if (c == num) {
        isFibonacci = true;
        break;
    }
}