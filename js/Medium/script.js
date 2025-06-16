// 1 1
class Rectangle {

  #length;
  #width;


  constructor(length = 1, width = 1) {
    this.setLength(length);
    this.setWidth(width);
  }


  setLength(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Length must be a positive number.");
    }
    this.#length = value;
  }


  setWidth(value) {
    if (typeof value !== "number" || value <= 0) {
      throw new Error("Width must be a positive number.");
    }
    this.#width = value;
  }


  getLength() {
    return this.#length;
  }

  getWidth() {
    return this.#width;
  }

  area() {
    return this.#length * this.#width;
  }
}


const rect = new Rectangle(10, 5);

console.log("Initial length:", rect.getLength());  
console.log("Initial width :", rect.getWidth());   
console.log("Initial area  :", rect.area());     

rect.setLength(12);  
rect.setWidth(7);     


console.log("Updated length:", rect.getLength()); 
console.log("Updated width :", rect.getWidth());   
console.log("Updated area  :", rect.area());  


document.writeln(`Updated length: ${rect.getLength()}<br>`);
document.writeln(`Updated width : ${rect.getWidth()}<br>`);
document.writeln(`Updated area  : ${rect.area()}<br>`);


//1 2 

class Employee {

  #name;
  #salary;
  #designation;

  constructor(name = "Unknown", salary = 0, designation = "N/A") {
    this.setName(name);
    this.setSalary(salary);
    this.setDesignation(designation);
  }


  setName(value) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error("Name must be a non empty string.");
    }
    this.#name = value.trim();
  }

  setSalary(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Salary must be a non negative number.");
    }
    this.#salary = value;
  }

  setDesignation(value) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error("Designation must be a non empty string.");
    }
    this.#designation = value.trim();
  }

 
  getName() {
    return this.#name;
  }

  getSalary() {
    return this.#salary;
  }

  getDesignation() {
    return this.#designation;
  }
}




const emp = new Employee("Alice Johnson", 75000, "Frontend Developer");

console.log("Name       :", emp.getName());        
console.log("Salary     :", emp.getSalary());     
console.log("Designation:", emp.getDesignation()); 


console.log(emp.name);       
emp.salary = 100000;          



emp.setSalary(80000);
emp.setDesignation("Senior Frontend Developer");

console.log(" After update ");
console.log("Name       :", emp.getName());       
console.log("Salary     :", emp.getSalary());     
console.log("Designation:", emp.getDesignation()); 


document.writeln(`Employee: ${emp.getName()}<br>`);
document.writeln(`Salary: ${emp.getSalary()}<br>`);
document.writeln(`Role: ${emp.getDesignation()}<br>`);


// 2 2

class BankAccount {

  constructor(accountNumber, ownerName, initialBalance = 0) {
    this.setAccountNumber(accountNumber);
    this.setOwnerName(ownerName);
    this.setBalance(initialBalance);
  }


  _accountNumber; 
  _ownerName;     
  _balance;       


  setAccountNumber(value) {
    
    this._accountNumber = String(value);
  }

  setOwnerName(value) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error("Owner name must be a non empty string.");
    }
    this._ownerName = value.trim();
  }

  setBalance(value) {
    if (typeof value !== "number" || value < 0) {
      throw new Error("Balance must be a non negative number.");
    }
    this._balance = value;
  }


  credit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Credit amount must be a positive number.");
    }
    this._balance += amount;
    console.log(
      `₹${amount.toFixed(2)} credited. New balance: ₹${this._balance.toFixed(2)}`
    );
  }

  debit(amount) {
    if (typeof amount !== "number" || amount <= 0) {
      throw new Error("Debit amount must be a positive number.");
    }
    if (amount > this._balance) {
      throw new Error("Insufficient funds.");
    }
    this._balance -= amount;
    console.log(
      `₹${amount.toFixed(2)} debited. New balance: ₹${this._balance.toFixed(2)}`
    );
  }

  displayBalance() {
    return this._balance;
  }


  getAccountNumber() {
    return this._accountNumber;
  }

  getOwnerName() {
    return this._ownerName;
  }
}

try {

  const myAcc = new BankAccount("9876543210",  "Ayesha Khan <br>", 5000);

  document.writeln("Owner        :", myAcc.getOwnerName());
  document.writeln("Account No.  :", myAcc.getAccountNumber());
  document.writeln(" <br> Opening bal. : ₹ " + myAcc.displayBalance().toFixed(2));


  myAcc.credit(2250);


  myAcc.debit(1000);

  document.writeln("<br> Final balance: ₹"  + myAcc.displayBalance().toFixed(2));


     
     document.writeln(myAcc._balance);

} catch (err) {
  document.writeln("Bank error:", err.message);
}

// 3 1

class Book {

  constructor(title = "Untitled", author = "Anonymous", publishedYear = 0) {
    this.setTitle(title);
    this.setAuthor(author);
    this.setPublishedYear(publishedYear);
  }

  _title;
  _author;
  _publishedYear;

  setTitle(value) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error("Title must be a non‑empty string.");
    }
    this._title = value.trim();
  }

  setAuthor(value) {
    if (typeof value !== "string" || !value.trim()) {
      throw new Error("Author must be a non‑empty string.");
    }
    this._author = value.trim();
  }

  setPublishedYear(value) {
    const currentYear = new Date().getFullYear();
    if (
      typeof value !== "number" ||
      value < 1400 ||
      value > currentYear
    ) {
      throw new Error(
        `Published year must be between 1400 and ${currentYear}.`
      );
    }
    this._publishedYear = value;
  }

  getTitle() {
    return this._title;
  }

  getAuthor() {
    return this._author;
  }

  getPublishedYear() {
    return this._publishedYear;
  }
}




const library = [
  new Book("To Kill a Mockingbird", "Harper Lee", 1960),
  new Book("1984", "George Orwell", 1949),
  new Book("The Pragmatic Programmer", "Andrew Hunt & David Thomas", 1999)
];


document.writeln("=== Library Catalog ===");


library.forEach((b, i) => {
  document.writeln(
    `${i + 1}. "${b.getTitle()}" by ${b.getAuthor()} (${b.getPublishedYear()})`
  );
});


class Student {

    
    #name;
    #rollNumber;
  

    constructor(name, rollNumber) {
        this.#name = name;  
        this.#rollNumber = rollNumber;  
    }


    displayInfo() {
        document.writeln(`<br>Name: ${this.#name}, Roll Number: ${this.#rollNumber}`); 
    }
}


let students = [
    new Student("Alice", 101),  
    new Student("Bob", 102),  
    new Student("Charlie", 103)  
];


students.forEach(student => {
    student.displayInfo();
});



// 4 2  
class Car { // Define a class named Car
 
     // Declare private fields: model, year, and speed
  #model;
  #year;
  #speed;

   // Constructor to initialize the fields with default values
  constructor() {
    this.#model = ""; // Set model
    this.#year = 0;  // Set year to 0
    this.#speed = 0;  // Set Speed to 0
  }


  setModel(model) {
    this.#model = model; // assign the global variable model to the local variable model
  }


  getModel() {
    return this.#model; // Return the value of the model
  }


  setYear(year) {
    this.#year = year; // assign the global variable year to the local variable year
  }


  getYear() {
    return this.#year; // return the value of the year
  }


  setSpeed(speed) {
    this.#speed = speed; // assign the global variable speed to the local variable speed
  }


  getSpeed() {
    return this.#speed; // return the value of the speed
  }


  displayInfo() {
  document.writeln(`<br>Model: ${this.#model}, Year: ${this.#year}, Speed: ${this.#speed} km/h`); // Display the car information
  }
}


let myCar = new Car(); // Create an instance of the Car class


myCar.setModel("Toyota Corolla"); // Set the model of the car
 myCar.setYear ( 2020); // Set the year of the car
myCar.setSpeed(180); // Set the speed of the car



document.writeln(" Model:", myCar.getModel()); // Get the model of the car
document.writeln(" <br>Year:", myCar.getYear()); // Get the year of the car
document.writeln(" <br>Speed:", myCar.getSpeed(), "km/h"); // Get the speed of the car



myCar.displayInfo(); // Display the car information using the displayInfo method

