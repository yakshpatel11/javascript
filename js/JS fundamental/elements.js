// 15. Store 5 elements in an array and print them using a loop.

let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
document.writeln("The elements in the array are:");
for (let i = 0; i < elements.length; i++) {
    document.writeln(elements[i]);
}
