// 21. Reverse the elements of an array.

let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
let reversedElements = [];
for (let i = elements.length - 1; i >= 0; i--) {
    reversedElements.push(elements[i]);
}
document.writeln("The reversed elements in the array are:");
for (let i = 0; i < reversedElements.length; i++) {
    document.writeln(reversedElements[i]);
}
