// 24. Remove duplicate elements from an array.
let elements = [];
for (let i = 0; i < 5; i++) {
    elements[i] = prompt("Enter element " + (i + 1) + ":");
}
let uniqueElement = [];
for (let i = 0; i < elements.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < uniqueElement.length; j++) {
        if (elements[i] == uniqueElement[j]) {
            isDuplicate = true;
            break;
        }

    }
    if (!isDuplicate) {
        uniqueElement.push(elements[i]);

    } 

}
document.writeln("The unique elements in the array are: " + uniqueElement);