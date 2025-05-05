// Recursion
// 1. Factorial
function Factorial(n) {
    if (n == 0) {
        return 1;
    }
    return n * Factorial(n - 1);
}
document.writeln(Factorial(6));

//  sum of n using recursion
function sum(n) {
    if (n == 0) {
        return 0;
    }
    return n + sum(n - 1);
}
document.writeln("<br>" + sum(8));

//  1 to n, n to 1 print using recursion
function print1toN(n) {
    if (n == 1) {
        return 1;
    }
    return n * print1toN (n - 1);
}
document.writeln("<br>" + print1toN(7));

// n to 1 print using recursion
function print(n) {
    if (n == o) {
        return 1;
    }
    return n + print(n - 1);
}
document.writeln("<br>" + print(7));