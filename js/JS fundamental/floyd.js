// 35. Print Floyd’s triangle:
//1  
// 2 3  
// 4 5 6

let rows = 3;
let number = 1;
let FloydTriangle = "";
for (let i = 1; i <= rows; i++) {
    for (let j = 1; j <= i; j++) {
        FloydTriangle += number + " ";
        number++;
    }
    FloydTriangle ;
}
document.writeln(FloydTriangle);
