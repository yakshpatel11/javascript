class User { // Define a User class
    constructor() {
        this.email = "";  // Initialize email property
        this.password = "";  // Initialize password property    
    }

    login(email, password) { // Method to log in a user  
        this.email = email;  // Set the email
        this.password = password;   // Set the password
        document.writeln("Login successful for:", this.email);   // Output success message
    }
}
class A { // Define a class A
    greet() {
        console.log("Hello from A"); // Print greeting from class A
    }
}

class B extends A {// Define class B that extends A
    greetAgain() {
        this.greet();  // Call greet method from class A
        console.log("And Hello again from B"); // Additional greeting from class B
    }
}
class Auth { // Define an Auth class for authentication
    constructor() {
        this.email;  // Declare email (uninitialized)
        this.password;  // Declare password (uninitialized)
        this.conPassword;  // Declare confirm password (uninitialized)
    }

    signIn(email, password) { // Method to sign in a user 
        this.email = email; // Set email
        this.password = password;  // Set password
        document.writeln(`Sign In: ${this.email}, ${this.password}<br>`);  // Output sign-in info
    }

    signUp(email, password, conPassword) {  // Method to sign up a user
        this.email = email; // Set email
        this.password = password; // Set password
        this.conPassword = conPassword; // Set confirm password
        document.writeln(`Sign Up: ${this.email}, ${this.password}, ${this.conPassword}<br>`); // Output sign-up info
    }
}

const user = new Auth(); // Create an instance of Auth class 
user.signUp("admin@gmail.com", 123456, 123456); // Call signUp method with email, password, and confirm password
user.signIn("example@gmail.com", 12345678);// Call signIn method with user details

class Vehicle {// Define a Vehicle class
    constructor(name, wheels) {
        this.name = name; // Set vehicle name
        this.wheels = wheels;// Set number of wheels
    }

    display() {
        // Display method to show vehicle info
        document.writeln(`Vehicle: ${this.name}, Wheels: ${this.wheels}`); // Output vehicle info 
    }
}

class Car extends Vehicle {
    // Define Car class that extends Vehicle
    constructor(name, wheels, fuelType) {
        super(name, wheels);  // Call the parent (Vehicle) constructor
        this.fuelType = fuelType;  // Set fuel type for the car
    }

    showCarDetails() { // Method to show car details
        this.display();  // Call display method from Vehicle
        document.writeln(`Fuel Type: ${this.fuelType}`); // Output fuel type
    }
}

const honda = new Car("Honda City", 4, "Petrol");// Create instance of Car
honda.showCarDetails();// Call method to show car details