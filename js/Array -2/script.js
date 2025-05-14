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

// at= used to access the element at the specified index. It can also be used to access the element from the end of the array by using a negative index.
let z = x.at(-1);
document.writeln(z);

// concat= used to combine two or more arrays and returns a new array.
let a = [1, 2, 3];
let b = [4, 5, 6];
let c = a.concat(b);
document.writeln(c);
 // sort= used to sort the element of an array in ascending order.
let d = [3, 1, 2];
d.sort();
document.writeln(d);

//let array = [11, 2, 32, 4, 5];
//let x = array.sort((a, b) => a - b);
// a = 11, b = 2
// 2, 11, 32, 4, 5
// a = 11, b = 4
// 2, 4, 11, 32, 5
// a = 11, b = 5
// 2, 4, 5, 11, 32
// a = 32, b = 5
// 2, 4, 5, 11, 32
// a = 32, b = 11
// 2, 4, 5, 11, 32
//document.writeln(x);

