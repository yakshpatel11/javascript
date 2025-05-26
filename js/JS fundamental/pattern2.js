// 43. Generate a pattern of stars in X shape: (Use condition i == j or i+j == n-1)

//*   *  
// * *   
// *    
// * *   
// *   *  
let n =5;
let Xpattern = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (i == j || i + j == n - 1) {
            Xpattern += "* ";
        }
        else {
            Xpattern += " ";
        }
    }
    Xpattern += "<br>";
}
document.writeln("X pattern of stars:<br>" + Xpattern);