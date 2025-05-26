// 40. Print a square pattern of stars:
// * * *  
// * * *  
// * * *  
let n = 3;
let squarePattern = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        squarePattern += "* ";
    }
    squarePattern += "<br>";
}
document.writeln("Square pattern of stars:<br>" + squarePattern);
