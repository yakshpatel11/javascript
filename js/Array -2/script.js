// Nested Array- 2d (dimensional) Array - array of arrays

let x = [];
x[0] = 10;
// push= used to add an element at the end of the array.
x.push(20);
x.push(x);

document.writeln(x);

// pop= used to remove the last element of the array and returns it. If the array is empty, undefined is returned and the array is not modified.
x.pop();
document.writeln(x);


// shift= used to remove the first element of the array and returns it. If the array is empty, undefined is returned and the array is not modified.
x.shift();
document.writeln(x);

// unshift= used to add an element at the begining of the array.
x.unshift(30);
document.writeln(x);

// splice= used to add or remove elements from an array. It can also be used to replace elements in an array.
x.splice(0, 1, 40);
document.writeln(x);

// slice= used to return a shallow copy of a portion of an array into a new array object selected from start to end (end not included)
let y = x.slice(0, 2);
document.writeln(y);
