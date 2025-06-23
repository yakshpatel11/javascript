
const email = document.getElementById("email");// Get the email input element by its ID and store it in the variable 'email'
const password = document.getElementById("password");// Get the password input element by its ID and store it in the variable 'password'
const login = document.getElementById("login");// Get the login button element by its ID and store it in the variable 'login'
const msg = document.getElementById("msg");// Get the message display element by its ID and store it in the variable 'msg'

// Define a regular expression to validate email format
const emailRegx =
    /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z]{2,}/;

// Define a regular expression to validate password strength:
// - At least one digit
// - At least one lowercase letter
// - At least one uppercase letter
// - At least 8 characters total
const passwordRegx =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

// Add an event listener to the login button that runs when it is clicked
login.addEventListener("click", () => {




    // Check if either the email or password fields are empty
    if (email.value === "" || password.value === "") {
        // Display warning message that both fields are required
        msg.textContent = "⚠️ Both fields are required!";
        // Set the message text color/style to red using a CSS class
        msg.className = "text-danger";
    }

    // If both email and password inputs pass their respective regex tests
    else if (emailRegx.test(email.value) && passwordRegx.test(password.value)) {
        // Display success message
        msg.textContent = "✅ Email and Password are valid!";
        // Set the message text color/style to green using a CSS class
        msg.className = "text-success";
    }

    // If both email and password are invalid
    else if (!emailRegx.test(email.value) && !passwordRegx.test(password.value)) {
        // Display error message for both fields
        msg.textContent = "❌ Enter valid email and password!";
        // Set the message text color/style to red
        msg.className = "text-danger";
    }

    // If only the email is invalid
    else if (!emailRegx.test(email.value)) {
        // Display error message for email only
        msg.textContent = "❌ Enter a valid email!";
        // Set the message text color/style to red
        msg.className = "text-danger";
    }

    // If only the password is invalid
    else if (!passwordRegx.test(password.value)) {
        // Display error message for password only
        msg.textContent = "❌ Enter a valid password!";
        // Set the message text color/style to red
        msg.className = "text-danger";
    }
});