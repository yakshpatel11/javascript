// 23. Find the second largest element in an array.

let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
let maxElement = elements[0];
let secondLargest = -Infinity;
for (let i = 1; i < elements.length; i++) {
    if (elements[i] > maxElement) {
        secondLargest = maxElement;
        maxElement = elements[i];

    }
    else if (elements[i] > secondLargest && elements[i] != maxElement) {
        secondLargest = elements[i];

    } 


} 
document.writeln("The second Largest element in the array is: " + secondLargest);