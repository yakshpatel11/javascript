// 11. Create a grading system using if-else (90+ = A, 80-89 = B, etc.).
let score = prompt("Enter your score (0-100):");
let grade;
if (score >= 90 && score <= 100) {
    grade = "A";
} else if (score >= 80 && score < 90) {
    grade = "B";
} else if (score >= 70 && score < 80) {
    grade = "C";
} else if (score >= 60 && score < 70) {
    grade = "D";
} else if (score >= 0 && score < 60) {
    grade = "F";
} else {
    document.writeln("Invalid score. Please enter a number between 0 and 100.");
}