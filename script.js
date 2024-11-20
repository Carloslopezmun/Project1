let currentInput = "";  // Stores the current input value
let operator = null;    // Stores the current operator
let previousInput = ""; // Stores the previous input

// Function to update the display
function updateDisplay() {
    document.getElementById("display").value = currentInput || previousInput || "0";
}

// Function to append a number to the current input
function appendNumber(number) {
    currentInput += number;
    updateDisplay();
}

// Function to append an operator
function appendOperator(op) {
    if (currentInput === "") return; // Don't append operator if no number is entered
    if (previousInput !== "") {
        calculate();
    }
    operator = op;
    previousInput = currentInput;
    currentInput = "";
    updateDisplay();
}

// Function to clear the display
function clearDisplay() {
    currentInput = "";
    previousInput = "";
    operator = null;
    updateDisplay();
}

// Function to calculate the result
function calculate() {
    if (previousInput === "" || currentInput === "") return;

    let result;
    let prev = parseFloat(previousInput);
    let curr = parseFloat(currentInput);

    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            if (curr === 0) {
                alert("Cannot divide by zero!");
                return;
            }
            result = prev / curr;
            break;
        default:
            return;
    }

    currentInput = result.toString();
    previousInput = "";
    operator = null;
    updateDisplay();
}
