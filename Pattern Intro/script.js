// Patern Intro // 
// Using a nested loop //
for (let j = 1; j <= 4; j++) {
    for (let i = 1; i <= 5; i++) {
        document.writeln(i);
    }
    document.writeln("<br>");
}

// * = using nested loop//
for (let j = 1; j <= 4; j++) {
    for (let i = 1; i <= 5; i++) {
        document.writeln("*");
    }
    document.writeln("<br>");
}

// 1 1 1 1 1 // using nested loop//
for (let j = 1; j <= 4; j++) {
    for (let i = 1; i <= 5; i++) {
        document.writeln(j);
    }
    document.writeln("<br>");
}
// 1 - 3 - 5 // using nested loop//
for (let j = 1; j <= 4; j++) {
    for (let i = 1; i <= 3; i++) {
        // i = 1// // 1 * 2 - 1 = 1//
        // i = 2// // 2 * 2 - 1 = 3//
        // i = 3// // 3 * 2 - 1 = 5//
        document.writeln(i * 2 - 1);
        document.writeln("-");

    }

    document.writeln("<br>");
}
// 1 0 1 0 1 // using nested loop//
for (let j = 1; j <= 4; j++) {
    for (let i = 1; i <= 5; i++) {
        document.writeln(i % 2);

    }
    document.writeln("<br>");
}