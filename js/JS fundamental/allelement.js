// 18. Calculate the average of all elements in an array.

let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
let sum = 0;
for (let i = 0; i < elements.length; i++) {
    sum += parseFloat(elements[i]);
}
let average = sum / elements.length;
document.writeln("The average of the elements in the array is: " + average);