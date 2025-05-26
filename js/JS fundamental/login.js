// 41. Create login system that gives 3 chances only.

let username = "admin";
let password = "12345";
let attempts = 3;
let isAuthencticated = false;
while (attempts > 0 && !isAuthencticated) {
    let inputUsername = prompt("Enter username:");
    let inputpassword = prompt("Enter password:");
    if (inputUsername == username && inputpassword == password) {
        document.writeln("Login successful!");
        isAuthencticated = true;

    }
    else {
        attempts--;
        if (attempts > 0) {
            document.writeln("Incorrect username or password. You have " + attempts + " attempts left.");
        }
        else {
            document.writeln("Login failed. No attempts left.");
            document.writeln("Please contact support.");
        }
    }
}