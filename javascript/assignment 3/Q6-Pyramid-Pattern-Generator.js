// Q6 – Pyramid Pattern Generator
"use strict";

// In Node.js, pass a row count as a command-line argument:
// node Q6-Pyramid-Pattern-Generator.js 4
// If no valid positive integer is supplied, the default is 5.
const userInput = Number(process.argv[2]);
const rows = Number.isInteger(userInput) && userInput > 0 ? userInput : 5;

console.log(`Pyramid pattern (${rows} rows):`);

for (let row = 1; row <= rows; row++) {
    let pattern = "";

    for (let column = 1; column <= row; column++) {
        pattern += "* ";
    }

    console.log(pattern.trimEnd());
}

// VAR COMPARISON:
// Replace `let row` and `let column` above with `var` and run again.
// For these synchronous nested loops, the visible pattern is the same.
// The difference is scope: var is function-scoped (or global here),
// while let is block-scoped. A var loop variable is reused outside the loop.

// Example demonstrating the scope difference:
for (var varIndex = 0; varIndex < 1; varIndex++) {
    // varIndex is declared with var.
}
console.log(`varIndex after loop: ${varIndex}`);

for (let letIndex = 0; letIndex < 1; letIndex++) {
    // letIndex is declared with let.
}
// console.log(letIndex); // Uncomment to see ReferenceError: not defined.

// Strict-mode check: uncommenting the next line causes ReferenceError
// because an undeclared loop variable is not allowed.
// for (undeclaredIndex = 0; undeclaredIndex < 2; undeclaredIndex++) {}

// Debugging exercise:
// Set breakpoints on both for-loop headers. Watch row, column, and pattern.
// Use Step Over to observe each iteration and how pattern grows.
