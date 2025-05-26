// 38. Create a program that takes student names and marks, stores in array, and shows highest scorer.

let students = [];
let marks = [];
let highestScorer = "";
let highestMarks = 0;
let numStudents = prompt("Enter the number of students:");
for (let i = 0; i < numStudents; i++) {
    let studentName = prompt("Enter the name of student " + (i + 1)+ ":");
    let studentMarks = prompt("Enter the marks of student " + (i + 1) + ":");
    students.push(studentName);
    marks.push(studentMarks);
    if (studentMarks > highestMarks) {
        highestMarks = studentMarks;
        highestScorer = studentName;
    }
}
document.writeln("The highest scorer is: " + highestScorer + " with marks: " + highestMarks);