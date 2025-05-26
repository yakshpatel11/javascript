// 50. Convert all negative numbers in array to positive.
let array = [];
let n = parseInt(prompt("Enter the number of elements in the array:"));
let positiveArray = [];
for (let i = 0; i < n; i++) {
    array[i] = parseInt(prompt("Enter element " + (i + 1) + ":"));

}
for (let i = 0; i < n; i++) {
    if (array[i] < 0) {
        positiveArray.push(-array[i]);
    }
    else {
        positiveArray.push(array[i]);
    }
}
document.writeln("Converted array with all negative numbers to positive: " + positiveArray);