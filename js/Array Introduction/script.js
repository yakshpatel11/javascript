// Intro of array
// deination of array = array can store multiple values in a single variable.
// array []
// to access the array we use index number. (position of the value in the array)
// index always start from 0.
// array can store multiple data types.

let x = [1, 2, 3, true, "hello"];
for (let i = 0; i <= 4; i++) {
    document.writeln(x[i]);
}

// Price of array
let price = [15, 25, 520, 52, 53, 800, 22, 80, 900, 10];
for (let i = 0; i < price.length; i++) {
    document.writeln(price[i] );
} 

// Even number 
let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 == 0) {
        document.writeln(nums[i]);
    }
}

// All products which price is more than 100
for (let i = 0; i < price.length; i++) {
    if (price[i] > 100) {
        document.writeln(price[i]);
    }
}

// print sum of array
let cart = [100, 200, 300, 400, 500];
let total = 0;
for (let i = 0; i < cart.length; i++) {
    total = total + cart[i];
}
document.writeln(total);

// printf reverse array.
let num = [1, 2, 3, 4, 5, 6, 7, 8, 9 ];
for (let i = num.length - 1; i >= 0; i--) {
    document.writeln(num[i]);
}

// perform addition between two arrays
let a = [1, 2, 3, 4, 5];
let b = [100, 200, 300, 400, 500];

for (let i = 0; i < a.length; i++) {
    document.writeln(a[i] + b[i]);
}

