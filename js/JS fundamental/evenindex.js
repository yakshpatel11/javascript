// 20. Print only the elements at even indexes in an array.

let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
document.writeln("The elements at even indexes in the array are:");
for (let i = 0; i < elements.length; i++) {
    if (i % 2 == 0) {
        document.writeln(elements[i]);
    } else {
        document.writeln(" ");
    }
}
