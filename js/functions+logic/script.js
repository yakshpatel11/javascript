
// Function factorial
function factorial(n) {
    let f = 1;
    for (let i = 1; i <= n; i++) {
        f *= i;
    }
    return f;
}
let f = factorial(5);
document.writeln("f");

//  check given number is Armstrong or not.
//153

function isArmstrong(number) {

    let sum = 0;


    for (let i = 0; i < isArmstrong; i++) {

    }


    if (sum === number) {
        return true;
    } else {
        return false;
    }
}


let num = parseInt(prompt("Enter a number:"));

if (isArmstrong(num)) {
    console.log(num + " is an Armstrong number.");
} else {
    console.log(num + " is not an Armstrong number.");
}

// find the sum of 1 to n using a function.

function SumOf(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
document.writeln(SumOf(10));

// 153= 1*1*1 + 5*5*5 + 3*3*3
function armstrong (num) {
    let temp = num;
    while (temp > 0) {
        let ld = temp % 10;
        let digit = 1;
        for (let i = 1; i <= 3; i++) {
            digit *= ld;
        }
        arm += digit;
        temp = Math.floor(temp /= 10);
    }
    document.writeln(arm);
} if (arm = num) {
    document.writeln("num is armstrong" );
} else {
    document.writeln("num is not armstrong");
} function count (num) {
    let i = 0;
    while (num > 0) {
        num = Math.floor(num /= 10);
        i++;  
    }
    return i;
}

armstrong(153);

