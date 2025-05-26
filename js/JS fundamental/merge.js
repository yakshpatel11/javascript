// 47. Merge two arrays and sort them.

let array1 = [];
let array2 = [];
let MergedArray = [];
let n1 = parseInt(prompt("Enter the number of elements in the first array:"));
let n2 = parseInt(prompt("Enter the number of elements in the second array:"));
for (let i = 0; i < n1; i++) {
    array1[i] = parseInt(prompt("Enter element " + (i + 1) + " of the first array:"))};
    for (let i = 0; i < n2; i++) {
        array2[i] = parseInt(prompt("Enter element " + (i + 1) + " of the second array:"))}
        for (let i = 0; i < n1; i++) {
            MergedArray[i] = array1[i];
        }
    for ( let i = 0; i < n2; i++) {
        MergedArray[n1 + i] = array2[i];
    }
    let n = MergedArray.length;
    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            if (MergedArray[j] > MergedArray[j + 1]) {
                let temp = MergedArray[j];
                MergedArray[j] = MergedArray[j + 1];
                MergedArray[j + 1] = temp;
            }
        }
    }
    document.writeln("The merged and sorted array is: " + MergedArray);