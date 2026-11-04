// Q1 – Callback: Greet User
"use strict";

// This function accepts a name and a callback function.
function greetUser(name, callback) {
    console.log(`Hello ${name}`);

    // Calling the callback transfers control to showEndMessage().
    console.log("Executing callback...");
    callback();
}

// Callback function to run after the greeting.
function showEndMessage() {
    console.log("Welcome to the course!");
}

// Pass the function itself (without parentheses) as the callback.
greetUser("Aditi", showEndMessage);

// Callback flow:
// 1. greetUser() starts.
// 2. It prints the greeting.
// 3. It calls the callback function.
// 4. showEndMessage() prints the final message.
