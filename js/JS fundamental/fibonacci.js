// 31. Print Fibonacci series up to n terms.
let n = 10;
let fib = [0, 1];
for (let i = 2; i < n; i++) {
    fib[i] = fib[i - 1]+ fib[i - 2];

}
document.writeln("The fibonacci series up to " + n + " terms is: " + fib.join("."));
