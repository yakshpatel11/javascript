// 28. Create a calculator using switch-case (add, subtract, multiply, divide).
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter an operator (+, -, *, /):");
let result;
switch (operator) {
    case '+':
        result = num1 + num2;
        break;
        case '-':
            result = num1 - num2;
            break;
            case '*':
                result = num1 * num2;
                break;
                case '/':
                    if (num2 !== 0) {
                        result = num1 / num2;

                    }
                    else {
                        document.writeln("Error: Division by zero is not allowed.");
                    } 
}
if (result !== undefined) {
    document.writeln("The result of " + num1 + " " + operator + " " + num2 + " = " + result);
}
