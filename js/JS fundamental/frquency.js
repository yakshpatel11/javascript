// 25. Count the frequency of each element in an array.

let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element  + " + (i + 1) + ":");
}
let frequency = {};
for (let i = 0; i < elements.length; i++) {
    if (frequency[elements[i]]) {
        frequency[elements[i]]++;

    } 
    else {
        frequency[elements[i]] = 1;
    }
}
document.writeln("The frequency of each element in the array is: " + JSON.stringify(frequency));