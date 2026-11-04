// Q9: Random Math Quiz Generator
// Generate two random integers between 1 and 20 (inclusive).
const firstNumber = Math.floor(Math.random() * 20) + 1;
const secondNumber = Math.floor(Math.random() * 20) + 1;

const operators = ["+", "-", "*", "/"];
const randomIndex = Math.floor(Math.random() * operators.length);
const selectedOperator = operators[randomIndex];

let correctAnswer;

switch (selectedOperator) {
    case "+":
        correctAnswer = firstNumber + secondNumber;
        break;
    case "-":
        correctAnswer = firstNumber - secondNumber;
        break;
    case "*":
        correctAnswer = firstNumber * secondNumber;
        break;
    case "/":
        correctAnswer = firstNumber / secondNumber;
        break;
    default:
        console.log("Invalid operator.");
}

// Format division answers to two decimal places.
// Other operations display their normal numeric result.
if (selectedOperator === "/") {
    correctAnswer = correctAnswer.toFixed(2);
}

console.log(`Math Question: ${firstNumber} ${selectedOperator} ${secondNumber} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);
