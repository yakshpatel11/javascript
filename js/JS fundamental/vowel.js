// 65. Count how many vowels are in a given string.
let str = prompt("Enter a string:");
let vowels = "aeiouAEIOU";
let count = 0;
for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
        count++;
    }
}
document.writeln("The number of vowels in the string is: " + count);