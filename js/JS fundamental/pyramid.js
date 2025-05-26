// 34. Create a number pyramid:
// 1  
// 2 3  
// 4 5 6  

let rows = 5;
let number = 1;
let pyramid = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pyramid += number + " ";
        number++;
    }
}
document.writeln(pyramid);










