// 2. Print the multiplication table of any given number.
let number = prompt("Enter a number to print its multiplication table:");

for (let i = 1; i <= 10; i++) {
    let result = number * i;
    document.writeln(result);
}
