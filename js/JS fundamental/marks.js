// 12. Accept 5 subject marks and find total, average, and grade.
let marks = [];
let total = 0;
let numSubjects = 5;
for (let i = 0; i < numSubjects; i++) {
    let mark = parseInt(prompt("Enter marks for subjects " + (i + 1) + ":"));
    marks.push(mark);
    total += mark;
}
let average = total / numSubjects;
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "F";
}
document.writeln("Marks: " + marks.join(", ") );
document.writeln("Total: " + total);
document.writeln("Average: " + average);
document.writeln("Grade: " + grade);