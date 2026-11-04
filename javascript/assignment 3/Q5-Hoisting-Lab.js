// Q5 – Hoisting Lab: The Sequence Trap
"use strict";

// PREDICTION / ORIGINAL SEQUENCE:
// console.log(score); // undefined: var declaration is hoisted and initialized.
// announce();         // Works: function declarations are hoisted with their body.
// var score = 50;
// function announce() { console.log("Game started"); }
// let status = "ready";
// startGame();        // Works here because status is initialized before the call.
// function startGame() { console.log(status); }

// Run the original sequence in this order:
console.log("Original sequence:");
console.log(score);
announce();

var score = 50;

function announce() {
    console.log("Game started");
}

let status = "ready";
startGame();

function startGame() {
    console.log(status);
}

// FIXED / CLEARER VERSION: initialize values before using them.
console.log("\nFixed version:");

const fixedScore = 50;
const fixedStatus = "ready";

const announceFixed = () => {
    console.log("Game started (arrow function)");
};

const startGameFixed = () => {
    console.log(fixedStatus);
};

console.log(fixedScore);
announceFixed();
startGameFixed();

// Hoisting notes:
// - var declarations are hoisted and initialized to undefined.
// - Function declarations are hoisted with their function body.
// - let/const are hoisted but remain in the Temporal Dead Zone until initialized.
// - Arrow functions stored in const/let variables are not callable before initialization.
