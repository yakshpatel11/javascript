// 16. Find the maximum element in an array.

let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
let maxElement = elements[0];
for (let i = 1; i < elements.length; i++) {
    if (elements[i] > maxElement) {
        maxElement = elements[i];
    }
}
document.writeln("The maximunm element in the array is: " + maxElement);