//         *
//       *   *
//     *       *
//    *         *
//   *           *
//  *             *
// *               *
// *               *
//  *             *
//   *           *
//    *         *
//     *       *
//      *     *
//       *   *
//        * *
//         *


// Draw a diaamond shape using only one loop
// rows = 19;
// cols = 20; 



//let x = 10;
//let y = 10;

// for (let i = 1; i <= 10; i++) {
// for (let j = 1; j <= 20; j++) {
//    if (j == x || j == y) {
///         document.writeln("*");
//      } else {
//          document.writeln("&nbsp&nbsp");
//       }
//    }

//x--;
// y++;
//  document.writeln("<br>");


//}
//x = 2;
//y = 18;

//for (let i = 1; i <= 9; i++) {
// for (let j = 1; j <= 20; j++) {
// if (j == x || j == y) {
//     document.writeln("*");
//   } else if (j == 10) {
//     document.writeln("&nbsp&nbsp");
// } else {
///      document.writeln("&nbsp&nbsp");
//  }
//}
//x++;
// y--;
//  document.writeln("<br>");

//}


let x = 10;
let y = 10;
let total = x + y - 1;
// total= 19

for (let i = 0; i < 19 * 2 - 1; i++) {
    for (let j = 0; j < 19 * 2 - 1; j++) {
        if (i < 19) {
            if (j === 19 - i - 1 || j === 19 + i - 1) {
                document.writeln("*");
            } else {
                document.writeln("&nbsp;");
            }
        } else {
            if (j === i - 19 + 1 || j === 3 * 19 - i - 3) {
                document.writeln("*");
            } else {
                document.writeln("&nbsp;");
            }
        }
    }
    document.writeln("<br>");
}










