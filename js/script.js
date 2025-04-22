//Voting Eligibility ! //
let age = 18;
if (age >= 18) {
    document.writeln("You are eligible to vote.");

}
if (age < 18) {
    document.writeln("You are not eligible to vote.");
}
else if (age == 18){
    document.writeln("You are just eligible to vote.");
}

// divisable by 7 or not //
let number = 56;
if (number % 7 == 0) {
    document.writeln("The number is divisible by 7.");
}
else {
    document.writeln("The number is not divisible by 7.");
}
// Check if a number is even or odd //
let number1 = 45;
if (number1 % 2 == 0){
    document.writeln("The number is even.");
}
else {
    document.writeln("The number is odd.");
}
//  even or not using if else, without using %.//
let number2 = 45;
let result = number2 - 2 * Math.floor(number2 / 2);
if (result == 0) {
    document.writeln("The number is even.");
}
else {
    document.writeln("The number is odd.");
}

//number is negative,positive, or neutral //
let number3 = -45;
if (number3 > 0) {
    document.writeln("The number is positive.");
}
else if (number ); {
    document.writeln("The number is negative.");
}
 if (number3 == 0) {
    document.writeln("The number is neutral.");
}


// grades of student based on their percentage //
let percentage = 85;
if (percentage >= 90){
    document.writeln("Grade A+");
}
else if (percentage >= 80){
    document.writeln("Grade A");
}
else if (percentage >=70){
    document.writeln("Grade B+");
}
else if (percentage >= 60){
    document.writeln("Grade B");
}
else if (percentage >= 50){
    document.writeln("Grade c+");
}
else if (percentage >= 40){
    document.writeln("Grade c");
}
else if (percentage >= 33){
    document.writeln("Grade D");
}
else {
    document.writeln("Grade F");
}