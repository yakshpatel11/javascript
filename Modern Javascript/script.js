// 1. Convert a normal function to an arrow function that returns the square of a number.
const square = (num) => num * num;
console.log(square(4));

// 2. Use template literals to print "My name is John and I am 25 years old.".
const name = "John";
const age = 25;
console.log(`My name is ${name} and I am ${age} years old.`);

// 3. Extract city and country from an object using destructuring.

const place = {
    city: "New York",
    country: "USA"
};
const { city, country } = place;
console.log(`City: ${city}, Country: ${country}`);

// 4. Merge two arrays [1, 2] and [3, 4] using the spread operator.
const array1 = [1, 2];
const array2 = [3, 4];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

// 5. Write a function that takes unlimited arguments and returns their product (use rest operator).
const product = (...args) => args.reduce((acc, curr) => acc * curr, 1);
console.log(product(2, 3, 4));

// 6. Explain why const does not allow reassignment but allows object property updates.
// The 'const' keyword prevents reassignment of the variable itself, meaning you cannot change what the variable points to.
// However, if the variable is an object, you can still modify its properties because the reference to the object remains the same.

// 7. Convert this code to ES6:
var names = "Alex";
var greet = function (name) {
    return "Hello " + name;
};

// 8. Write a function that returns the max value from a given array using spread operator.
const getMaxValue = (arr) => Math.max(...arr);
console.log(getMaxValue([1, 5, 3, 9, 2]));
const greetES6 = (name) => `Hello ${name}`;
console.log(greetES6(names));

// 9. Use destructuring to swap two variables a and b.
let a = 5;
let b = 10;
[a, b] = [b, a];
console.log(`a: ${a}, b: ${b}`);

// 10. Write a function fetchData that uses template literals to print Fetching data from {url}.
const fetchData = (url) => {
    console.log(`Fetching data from ${url}`);
};
fetchData("https://api.example.com/data");