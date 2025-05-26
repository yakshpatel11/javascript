// 36. Print inverted number triangle:
// 1 2 3  
// 1 2  
// 1  

let rows = 3;
let invertedTriangle = "";
for (let i = rows; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        invertedTriangle += j + " ";
    }
    invertedTriangle += "<br>";
}

document.writeln(invertedTriangle);