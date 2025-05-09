//  FIND FACTORIAL USING RECURSION.

function factorial (n) {
    if ( n == 1) {
        return 1;
    }
    else {
        return n * factorial(n - 1); 
    }

}
document.writeln(factorial (5));

//  CHECK WHETHER A NUMBER IS A PALINDROME OR NOT USING A FUNCTION.
;
function palindrome(num) {
    let temp = num;
    let reverse = 0;
    while (temp > 0) {
        let rev = temp % 10;
        reverse =( reverse * 10) + rev;
       temp = Math.floor(temp /= 10);

    }
    if (num == reverse) {
        document.writeln("Number is palindrome");
    }
    else {
        document.writeln("Number is not palindrome");
    }

}
palindrome(121);