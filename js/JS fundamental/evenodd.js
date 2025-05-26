// 19. Count how many even and odd numbers are in an array.

let numbers = [];
for (let i = 0; i < 10; i++) {
    numbers[i] = prompt("Enter number "+ (i + 1) + ":");
}
let evenCount = 0;
let oddCount = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 == 0) {
        evenCount++;
        } else {
            oddCount++;
        }
}
document.writeln("The number of even numbers in the array is: " + evenCount);
document.writeln("The number of odd numbers in the array is: " + oddCount);