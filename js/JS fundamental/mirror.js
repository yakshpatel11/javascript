// 63. Print mirrored triangle pattern:

  //  *  
 //  **  
 // ***  
 //****  
let n = 4;
let mirroredTrianglePattern = "";
for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        if (j <= i) {
            mirroredTrianglePattern += "*";

        }
        else {
            mirroredTrianglePattern += " ";
        }

    }
    mirroredTrianglePattern += "<br>";
}
document.writeln("Mirrored triangle pattern of stars:<br>" + mirroredTrianglePattern);