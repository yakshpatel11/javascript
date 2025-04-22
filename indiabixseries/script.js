// 2, 1, (1/2), (1/4),//
// let x = 2;
// let y = 1;
// let z = 1 / 2;

// for (let i = 1; i <= 4; i++) {
//     let result = x + y * z;
//     document.writeln(result + "<br>");
//     x = y;
//     y = z;
//     // get the last digit of the result//
// }
//7, 10, 8, 11, 9, 12,//
// let a = 7;
// for (let i = 1; i <= 6; i++) {
//     document.writeln(a + " "+ a);
//    for (let j = 1; j <= 2; j++)  {
//         a = a + 1;
//     }
//     if (i % 2 != 0) {
//         a = a + 3;


//     }
// }
// 53, 53, 40, 40, 27, 27//
// let b = 53;
// for (let i = 1; i <= 4; i++) {
//     document.writeln(b + "  " + b);
//     b = b - 13;

// }
// //  22, 21, 23, 22, 24, 23, ... What number should come next?//
// let c = 22;
// for (let i = 1; i <= 6; i++) {
//     document.writeln(c + " ");
//     c -= 1;
//     c += 2;;
//     if (let i == 6) {
//         c = 23;
//     }
// }

// 1, 2, 4, 8, 16, 32, ... what number should come next?//
let d = 1;
for (let i = 1; i <= 6; i++) {
    document.writeln(d + " ");
    d *= 2;
    if (i == 6) {
        d = 64;
    }

}
 //  21, 9, 21, 11, 21, 13, 21, ... What number should come next?//
 let e = 9;
   for (let i = 1; i <=4; i++) {
        document.writeln(e + " ");
        e += 2;
        if (i == 6) {
            e= 21;
        }
   }