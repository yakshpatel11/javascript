// maximum element of array using method.
function maximum(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
document.writeln(maximum([1, 2, 3, 4, 5]) + "<br>");

//  maximum element of array without using method.
function findMax(arr) {
    if (arr.length == 0) {
        return max;
    }

    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }

    return max;
}
document.writeln(maximum([6, 7, 8, 9, 10]) + "<br>");

//  minimum element of array using method.
function minimum(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }

    }
    return min;
}
document.writeln(minimum([10, 11, 12, 13, 14]) + "<br>");

//  minimum element of array without using method.
function findmin(arr) {
    if (arr.length == 0) {
        return min;
    }
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
document.writeln(minimum([7, 6, 8, 9, 10]) + "<br>");

// sort array in acending order without using method.
let arr = [5, 3, 8, 1, 2];
let x = arr.sort((a, b) => a - b);
document.writeln(x + "<br>");

let numbers = [5, 3, 8, 1, 2];

numbers.sort(function (a, b) {
    return a - b;
});

document.writeln(numbers + "<br>");

//  sort array in acending order using method.
let arr1 = [15, 13, 18, 11, 12];
let x1 = arr1.sort((a, b) => a - b);
document.writeln(x1 + "<br>");

//  sort array in decending order without using method.
function sortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

// Example usage
function sortDescending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {
                // Swap elements
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

//  sort array in decending order without using method.
function Descending(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] < arr[j + 1]) {

                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}
document.writeln(Descending([15, 13, 18, 11, 12]) + "<br>");

// sort array in decending order using method.
let arr2 = [25, 23, 28, 21, 22];
let x2 = arr2.sort((a, b) => b - a);
document.writeln(x2 + "<br>");

// check how many elements match give conditions in array using method.
let number = [5, 12, 8, 20, 3, 15];
let count = numbers.filter(num => num > 10).length;
document.writeln(count + "<br>");

//  check how many elements match give conditions in array without using method.
function countConditions(arr, conditions) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > conditions) {
            count++;
        }
    }
    return count;
}
document.writeln(countConditions([5, 12, 8, 20, 3, 15, 10]) + "<br>");

//  find combinations of addition for user given number in array.
function findCombinations(arr, target) {
    let result = [];

    function combinations(start, path, sum) {
        if (sum === target) {
            result.push([...path]);
            return;
        }
        if (sum > target) {
            return;
        }

        for (let i = start; i < arr.length; i++) {
            path.push(arr[i]);
            combinations(i + 1, path, sum + arr[i]);
            path.pop();
        }
    }

    combinations(0, [], 0);
    return result;
}
document.writeln(findCombinations([1, 2, 3, 4, 5]) + "<br>")






