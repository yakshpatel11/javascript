// 37. Count total positive and negative elements in an array.
let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
let positiveCount = 0;
let negativeCount = 0;
for (let i = 0; i < elements.length; i++) {
    if (elements[i] > 0) {
        positiveCount++;
        } else if (elements[i] < 0) {
            negativeCount++;
        } 
}
document.writeln("Total positive elements: " + positiveCount);
document.writeln("<br>Total negative elements: " + negativeCount);