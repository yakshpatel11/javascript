
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
console.log(SumOf(10));

