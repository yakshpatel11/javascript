//12345
// 2345
//  345
//   45
//    5

for (let i = 1; i <= 5; i++) {
    for (let k = 1; k < i; k++) {
        document.writeln("-");
    }
    for (let j = 1; j <= 5; j++) {
        document.writeln(j);
    }
    document.writeln("<br>");
}

// 1
//2 1
//3 2 1
//4 3 2 1
//5 4 3 2 1 

for (let i = 1; i <= 5; i++) {
    for (let j = i; j >= 1; j--) {
        document.writeln(j + " ");
    }
    document.writeln("<br>");
}

// 5
//4 5
//3 4 5
//2 3 4 5
//1 2 3 4 5

for (let i = 5; i >= 1; i--) {
    for (let j = i; j <= 5; j++) {
        document.writeln(j + " ");
    }
    document.writeln("<br>");
}

//5
//5 4
//5 4 3
//5 4 3 2
//5 4 3 2 1

for (let i = 5; i >= 1; i--) {
    for (let j = 5; j >= i; j--) {
        document.writeln(j + " ");
    }
    document.writeln("<br>");
}

//1
//2 2
//3 3 3
//4 4 4 4
//5 5 5 5 5

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln(i + " ");
    }
    document.writeln("<br>");
}

//5
//4 4
//3 3 3
//2 2 2 2
//1 1 1 1 1

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.writeln(i + " ");
    }
    document.writeln("<br>");
}

//*
//* *
//* * *
//* * * *
//* * * * *

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= i; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}

//* * * * *
//* * * *
//* * *
//* *
//*

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}

//- | - | -
//- | - |
//- | -
//- |
//-

for (let i = 5; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {

        if (j == i) {
            document.writeln("-");
            document.writeln("<br>");
        }

        else {
            document.writeln("- |");
        }

    }
}

//* * * * *
//*       *
//* * * * *
//*       *
//*       *
//*       *
//*       *


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j == 1 || j == 5 || i == 1 || i == 3) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");

}

document.writeln("<br>");

// * * *
// *    *
// *   *
// * * 
//*    *
//*     *
//* * *

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j == 1 || j == 5 || i == 1 || i == 3 || i == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");
// * * * *
// *
// *
// *
// *
// * * * *


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5) {
            document.writeln("*");
        } else if (j == 1) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");

// *   *
// *      *
// *       *
// *        *
// *        *
// *       *
// *      *
// *    *
// *  *      


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5) {
            document.writeln("*");
        } else if (j == 1 || j == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");


// * * * *
// *
// *
// * * * *
// *
// *
// * * * *

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5) {
            document.writeln("*");
        } else if (j == 1 || i == 5 || i == 3) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");


// * * * *
// *
// *
// * * * *
// *
// *
// *

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1) {
            document.writeln("*");
        } else if (j == 1 || i == 3) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");


// * * *
// *     *
// *
// * * * *
// *     *
// *     *
// * * *


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5 || j == 1 || j == 5) {
            document.writeln("*");
        } else if (j == 1 || j == 5 || i == 3) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");



// *       *
// *       *
// *       *
// * * * * *
// *       *
// *       *
// *       *

for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (j == 1 || j == 5 || i == 3) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");

}

document.writeln("<br>");

// * * * * *
//     *
//     *
//     *
//     *
// * * * * *

for (let i = 1; i <= 5; i++) {
    for (let j = 3; j <= 7; j++) {
        if (i == 1 || i == 5) {
            document.writeln("*");
        } else if (j == 1 || j == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");

// * * * * *
//     *
//     *
//     *
// *   *
//  * * 


for (let i = 1; i <= 5; i++) {
    for (let j = 3; j <= 6; j++) {
        if (i == 1 || i == 5) {
            document.writeln("*");
        } else if (j == 1 || j == 6) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");

// *       *
// *     *
// *   *
// * *
// *   *
// *     *
// *       *


for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 5 || i == 5) {
            document.writeln("*");
        } else if (j == 1) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");

// *
// *
// *
// *
// *
// *
// * * * * *

for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 7) {
            document.writeln("*");
        } else if (j == 1) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");

// *     *
// * * * *
// *  *  *
// *     *
// *     *
// *     *


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 2 || i == 3) {
            document.writeln("*");
        } else if (j == 1 || j == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");

// * * * * *
// *       *
// *       *
// *       *
// *       *
// *       *
// * * * * *


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 5) {
            document.writeln("*");
        } else if (j == 1 || j == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");


// * * * *
// *     *
// *     *
// * * * *
// *
// *
// *



for (let i = 1; i <= 7; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 1 || i == 4) {
            document.writeln("*");
        } else if (j == 1 || j == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");


// * * * * *
//     *
//     *
//     *
//     *
//     *

for (let i = 1; i <= 5; i++) {
    for (let j = 3; j <= 7; j++) {
        if (i == 1) {
            document.writeln("*");
        } else if (j == 1 || j == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");


// *       *
// *       *
// *       *
// *       *
// *       *
// *       *
// * * * * *


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i == 5) {
            document.writeln("*");
        } else if (j == 1 || j == 5) {
            document.writeln("*");
        } else {
            document.writeln("&nbsp&nbsp");
        }
    }
    document.writeln("<br>");
}
document.writeln("<br>");

