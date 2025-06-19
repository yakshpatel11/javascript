// Create a Car class that has brand and model properties. Use a constructor to initialize them. Create a method getDetails() that returns the full name of the car.


class Car {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    getDetails() {
        return `${this.brand} ${this.model}`;
    }
}

const car = new Car("Toyota", "Camry");
document.writeln(car.getDetails());
 



// Create a Person class that stores name and age. Make age private (use closure or #age) and provide methods to getAge() and setAge() safely.

class Person {
    #age;
    constructor(name, age) {
        this.name = name;
        this.#age = age;
    }
    getAge() {
        return this.#age;
    }
    setAge(age) {
        this.#age = age;
    }
}

const person = new Person("John", 30);
document.writeln(person.getAge());
person.setAge(40);
document.writeln(person.getAge());

// Create a User class where the password should be private. Add methods to changePassword() and checkPassword().

class User {
    #password;
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    changePassword(newPassword) {
        this.#password = newPassword;
    }
    checkPassword(password) {
        return this.#password === password;
    }
}

const user = new User("john", "password123");
document.writeln(user.checkPassword("password123"));

// Create a Calculator class that hides the internal result property (e.g., using #result). Add methods to add(num), subtract(num), and getResult().

class Calculator {
    #result;
    add(num) {
        this.#result += num;
    }
    subtract(num) {
        this.#result -= num;
    }
    getResult() {
        return this.#result;
    }
}

const calculator = new Calculator();
calculator.add(5);
calculator.subtract(3);
document.writeln(calculator.getResult());
 

// Create a BankAccount class where balance is private. Add deposit(amount), withdraw(amount), and getBalance() methods. Try to access balance directly (it should not work).

class BankAccount {
    #balance;
    constructor() {
        this.#balance = 0;
    }
    deposit(amount) {
        this.#balance += amount;
    }
    withdraw(amount) {
        if (amount > this.#balance) {
            throw new Error("Insufficient balance");
        }
        this.#balance -= amount;
    }
    getBalance() {
        return this.#balance;
    }
}

const bankAccount = new BankAccount();
bankAccount.deposit(100);
bankAccount.withdraw(50);
document.writeln(bankAccount.getBalance());

//Create a Vehicle class with a method move(). Then create a Bike class that extends Vehicle. Create an object of Bike and call the move() method.

class Vehicle {
    move() {
        document.writeln("Moving...");
    }
}

class Bike extends Vehicle {}

const bike = new Bike();
bike.move();

// Create a Person class with a method greet(). Create a Student class that extends Person and adds a method study(). Use both methods on a Student object. 

class Person1 {
    greet() {
        document.writeln("Hello!");
    }
}

class Student extends Person1 {
    study() {
        document.writeln("Studying...");
    }           

}

const student = new Student();
student.greet();
student.study();

//Create a Bird class wi th a method makeSound(). Then create Sparrow and Parrot classes that override the makeSound() method with their unique sounds.

class Bird {
    makeSound() {
        document.writeln("Chirp, chirp!");
    }
}

class Sparrow extends Bird {
    makeSound() {
        document.writeln("Sparrow chirp, chirp!");
    }
}

class Parrot extends Bird {
    makeSound() {
        document.writeln("Parrot chirp, chirp!");
    }
}

const sparrow = new Sparrow();
const parrot = new Parrot();
sparrow.makeSound();
parrot.makeSound();

