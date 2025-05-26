// 13. Print a right-angled triangle pattern of *
// *
// * *
// * * *

let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += "*";

    } 
}
 document.writeln(pattern);