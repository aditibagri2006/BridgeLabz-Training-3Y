// Q3. Math Utility Dashboard

const x = 16.75;

// Perform the required mathematical operations.
const roundedValue = Math.round(x);
const squareRoot = Math.sqrt(x);
const cube = Math.pow(x, 3);
const randomNumber = Math.floor(Math.random() * 41) + 10;

// Display all results using a template literal.
const summary = `
MATH UTILITY DASHBOARD
----------------------
Original number : ${x}
Rounded value   : ${roundedValue}
Square root     : ${squareRoot.toFixed(2)}
Power (x³)      : ${cube.toFixed(2)}
Random (10–50)  : ${randomNumber}
`;

console.log(summary);
