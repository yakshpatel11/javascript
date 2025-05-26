// 48. Separate positive and negative numbers in array into two arrays.

let array = [];
let n = parseInt(prompt("Enter the number of elements in the array:"));
let positiveArray = [];
let negativeArray = [];
for (let i = 0; i < n; i++) {
    array[i] = parseInt(prompt("Enter element " + (i + 1) + ":"));
}
for (let i = 0; i < n; i++) {
    if (array[i] >= 0) {
        positiveArray.push(array[i]);
    }   
    else {
        negativeArray.push(array[i]);
    }
}
document.writeln("Positive numbers: " + positiveArray);
document.writeln("<br>Negative numbers: " + negativeArray);