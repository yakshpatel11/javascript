// 14. Print the following pattern:
// 1  
// 1 2  
// 1 2 3  


let rows = 5;
let pattern = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        pattern += j + " ";
    }
    pattern += "<br>";

}
document.writeln(pattern);



