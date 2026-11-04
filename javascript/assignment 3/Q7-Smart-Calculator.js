// Q7 – Smart Calculator
"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidOperationError";
    }
}

class CalculatorOperationError extends Error {
    constructor(message) {
        super(message);
        this.name = "CalculatorOperationError";
    }
}

function calculate(operation, firstNumber, secondNumber) {
    switch (operation) {
        case "add":
            return firstNumber + secondNumber;

        case "divide":
            if (secondNumber === 0) {
                throw new CalculatorOperationError("Cannot divide by zero.");
            }
            return firstNumber / secondNumber;

        case "power":
            return Math.pow(firstNumber, secondNumber);

        case "root":
            if (firstNumber < 0) {
                throw new CalculatorOperationError("Cannot calculate the real square root of a negative number.");
            }
            return Math.sqrt(firstNumber);

        case "subtract":
            return firstNumber - secondNumber;

        default:
            throw new InvalidOperationError(`Unknown operation: ${operation}`);
    }
}

console.log("SMART CALCULATOR SUMMARY");

for (const operation of operations) {
    try {
        const result = calculate(operation, num1, num2);
        console.log(`${operation}: ${result}`);
    } catch (error) {
        console.log(`${operation}: ${error.name} - ${error.message}`);
    }
}

// Extra test for an unrecognized operation:
try {
    calculate("multiply", num1, num2);
} catch (error) {
    console.log(`Extra test: ${error.name} - ${error.message}`);
}
