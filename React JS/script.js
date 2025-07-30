// Array and Object Handling
// An array is a collection of values stored in a single variable. Arrays are ordered, index-based, and mutable.

const fruits = ['apple', 'banana', 'cherry'];
console.log(fruits[0]); // Output: apple

//1. Reverse an array Write a function to reverse the array [1, 2, 3, 4, 5]
function reverseArray(arr) { // Function to reverse an array
    let reversed = [];   // Create an empty array to store reversed elements
    for (let i = arr.length - 1; i >= 0; i--) { // Loop backward from the last element to the first
        reversed.push(arr[i]); // Push each element to the new array
    }
    return reversed; //  Return the reversed array
}
console.log(reverseArray([1, 2, 3, 4, 5]));

// 2.  Remove duplicates from an array Input: [1, 2, 2, 3, 4, 4, 5
function removeDuplicates(arr) { // Function to remove duplicate values from an array
    let unique = [];   // Create an empty array to store unique elements
    for (let i = 0; i < arr.length; i++) { // Loop through each element of the array
        if (!unique.includes(arr[i])) { // Check if the element is NOT already in the 'unique' array
            unique.push(arr[i]);  // If not present, push it into 'unique'
        }
    }
    return unique;  // Return the array with unique elements
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));


// 3. Find the sum of all numbers in an array Input: [10, 20, 30, 40]
function sumArray(arr) { // Function to calculate sum of array elements
    let total = 0;  // Initialize total as 0
    for (let i = 0; i < arr.length; i++) { // Loop through each element
        total += arr[i]; // Add each element to total
    }
    return total; // Return the sum
}
console.log(sumArray([10, 20, 30, 40]));

// 4. Find the maximum and minimum number in an array Input: [8, 3, 12, 5, 1]
function findMaxMin(arr) { // Function to find max and min values
    let max = arr[0];  // Assume first element is max
    let min = arr[0]; // Assume first element is min
    for (let i = 1; i < arr.length; i++) {  // Start loop from 2nd element
        if (arr[i] > max) {  // If current element is greater than max
            max = arr[i]; // Update max
        }
        if (arr[i] < min) {  // If current element is smaller than min
            min = arr[i];  // Update min
        }
    }
    return { max, min }; // Return max and min in an object
}
console.log(findMaxMin([8, 3, 12, 5, 1]));

// 5. Flatten a nested array Input: [[1, 2], [3, 4], [5]]
function flattenArray(arr) { // Function to flatten nested arrays
    let flat = [];   // Create empty array to store flattened elements
    for (let i = 0; i < arr.length; i++) {  // Loop through outer array
        for (let j = 0; j < arr[i].length; j++) {// Loop through each sub-array
            flat.push(arr[i][j]); // Push elements into flat array
        }
    }
    return flat;  // Return flattened array
}
console.log(flattenArray([[1, 2], [3, 4], [5]]));

// 6. Count properties in an object Input:

const user = { name: "John", age: 25, gender: "male" }; // Object containing user details
function countProperties(obj) { // Function to count properties of an object 
    return Object.keys(obj).length;   // Convert object keys to array and return length
}
console.log(countProperties(user));

// 7. Convert an object to an array of key-value pairs Input:

const person = { name: "Alice", age: 30 }; // Object to convert into array
function objectToArray(obj) { // Function to convert object into [key, value] pairs
    return Object.entries(obj);  // Convert object into array of [key, value]
}
console.log(objectToArray(person));

// 8. Merge two objects Input:

const a = { x: 1, y: 2 }; // Two objects to merge
const b = { y: 3, z: 4 };
function mergeObjects(obj1, obj2) { // Function to merge objects
    return { ...obj1, ...obj2 };  // Spread both objects into a new one
}
console.log(mergeObjects(a, b));

// 9. Access nested object values safely Input:

const data = { // Nested object
    user: {
        profile: {
            name: "Kiran"
        }
    }
};
function getNestedValue(obj, path) { // Function to safely access nested values
    return path.split('.').reduce((acc, key) => acc && acc[key], obj); // Split path into keys and reduce step by step
}
console.log(getNestedValue(data, 'user.profile.name'));

// 10. Convert an array of objects to a single object using a key Input:

const arr = [ // Array of objects
    { id: 1, name: "John" },
    { id: 2, name: "Jane" }
];
function arrayToObject(arr, key) { // Function to convert array into object with 'id' as key
    return arr.reduce((acc, item) => { // Use reduce to build object
        acc[item[key]] = item;  // Set key as item[key] and value as whole object
        return acc;
    }, {});
}
console.log(arrayToObject(arr, 'id'));

