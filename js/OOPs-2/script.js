// class
// A class is like a blueprint or template for creating objects.
// it defines attributes (variable) and methods (functions).
// A user-defined datatype.

class ATM { // Define a class named ATM

    constructor( Name, balance) // Constructor method to initialize the object with Name and balance
    {
        this.Name = Name; // Here have to store the user's name
        this.balance = balance; // here have to store the user's balance
    }

    checkBalance() { // Method to check and display the balance and user's name
        document.writeln("<br> Balance: " + this.balance ); // here i am dispalying current balance
        document.writeln("<b> Name: " + this.Name + "</b>");// Here i am displaying user's name

    }
    deposit (amount) {// Method to deposit an amount to the balance
        this.balance += amount; // Here i am adding the amount of deposit
        document.writeln("<b> Balance: " + this.balance + "</b>");// Here i am displaying new balance
        this.checkBalance();// calling checkBalance method to show updated balance
    }

    withdraw (amount) {// Method to withdraw an amount from the balance
        if (amount > this.balance) {// here i am checking if the amount is greater than the balance
            document.writeln("<b> Insufficient balance  </b>" + amount );// Here i am giving warning about insufficient balance
    }
         else(this.balance -= amount);// here i am subtracting the amount from the balance
        document.writeln("<b> Balance: " + this.balance + "</b>");// Here i am displaying new balance
        this.checkBalance();// calling checkBalance method to show updated balance
    }
}

let atm = new ATM("John Doe", 1000);// creating an object of the ATM class with initial name and balance
atm.checkBalance();// calling checkBalance method to display current balance
atm.deposit(500);// calling deposit method to add money and show updated balance
atm.withdraw(200);// calling withdraw method to subtract money and show updated balance