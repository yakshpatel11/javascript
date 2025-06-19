class User {  // Class representing a generic user with login functionality
    constructor() {
        this.username = ""; // Initialize username 
        this.password = ""; // Initialize password
    }

    login(username, password) {     // Method to simulate user login
        this.username = username;   // Set username
        this.password = password;   // Set password
        document.writeln("Logged in as: " + this.username);     // Display logged in username
    }
}
class Indian { // Class representing an Indian citizen
    constructor(adharNo, birthPlace) {
        this.adharNo = adharNo;  // Store Aadhaar number
        this.birthPlace = birthPlace; // Store place of birth
    }

    display() { 
    // Method to display Indian-specific details
        document.writeln("Adhar No : " + this.adharNo + "<br>");  // Display Aadhaar number
        document.writeln("Birth Place : " + this.birthPlace + "<br>"); // Display place of birth
    }
}

class Person extends Indian { 
// Person class extending Indian class to include personal details
    constructor(name, age, gender, adharNo, birthPlace) {
        super(adharNo, birthPlace);  // Call the constructor of Indian
        this.name = name;  // Set person's name
        this.age = age;  // Set person's age
        this.gender = gender; // Set person's gender
    }

    display() {     // Method to display person details along with Indian details
        super.display();  // Call display method of Indian class
        document.writeln("Name : " + this.name + "<br>");// Display name
        document.writeln("Age : " + this.age + "<br>");  // Display age
        document.writeln("Gender : " + this.gender + "<br>");  // Display gender
    }
}
 
class Employee extends Person { // Employee class extending Person class to add employment-related details
    constructor(name, age, gender, adharNo, birthPlace, role, salary, qualification) {
        super(name, age, gender, adharNo, birthPlace); // Call constructor of Person
        this.role = role;  // Set job role
        this.salary = salary;// Set salary
        this.qualification = qualification;// Set qualification
    }

    display() {  // Method to display complete employee information
        super.display();  // Call display method of Person (and hence Indian)
        document.writeln("Role : " + this.role + "<br>"); // Display job role
        document.writeln("Salary : " + this.salary + "<br>");  // Display salary
        document.writeln("Qualification : " + this.qualification + "<br>");  // Display qualification
    }
}

const suresh = new Employee( 
// Create an instance of Employee with all necessary information
    "Suresh Maheta", // Name
    25, // Age
    "Male",     // Gender
    "866142950928", // Aadhaar number
    "Lonavala",  // Birth place
    "Backend Designer", // Role
    150000, // Salary
    "M.Pharm" // Qualification
);
suresh.display();

class Shape {
    constructor(color, area) {
        this.color = color;
        this.area = area;
    }

    getColor() {
        document.writeln("Shape color is " + this.color + "<br>");
    }

    calculateArea() {
        document.writeln("Area is " + this.area + "<br>");
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color, 3.14 * radius * radius); // area of circle
    }
}

class Rectangle extends Shape {
    constructor(length, width, color) {
        super(color, length * width); // area of rectangle
    }
}

const circle = new Circle(2, "red");
const rectangle = new Rectangle(2, 4, "blue");

circle.calculateArea();
circle.getColor();
rectangle.calculateArea();
rectangle.getColor();


