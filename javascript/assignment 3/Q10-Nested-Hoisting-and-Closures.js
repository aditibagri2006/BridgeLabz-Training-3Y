// Q10 – Nested Hoisting and Closures
"use strict";

function outer() {
    console.log(count); // undefined: outer's var count is hoisted.
    var count = 5;

    function inner() {
        console.log(count); // undefined: inner's own var count is hoisted.
        var count = 10;
    }

    inner();
}

console.log("Original nested functions:");
outer();

// Output is:
// undefined
// undefined
//
// Hoisting creates separate function execution contexts:
// - outer() has its own local count, initially undefined, then set to 5.
// - inner() has a different local count, initially undefined, then set to 10.
// - The inner count shadows the outer count inside inner().

console.log("\nInner function rewritten as an arrow:");

function outerWithArrow() {
    console.log(count); // undefined
    var count = 5;

    const innerArrow = () => {
        // Keeping `var count` means it still creates a local binding in
        // the arrow function, so it shadows outer count and logs undefined.
        console.log(count);
        var count = 10;
    };

    innerArrow();
}

outerWithArrow();

console.log("\nArrow function without a shadowing local variable:");

function outerWithClosure() {
    var count = 5;

    const innerArrow = () => {
        // No local count is declared here, so the arrow reads outer count.
        console.log(count);
    };

    innerArrow();
}

outerWithClosure();

// Debugging / call stack exercise:
// 1. Put a breakpoint on `console.log(count)` inside outer().
// 2. Call Stack shows outer() above the top-level script.
// 3. Step over var count = 5, then step into inner().
// 4. Inside inner(), inspect its local count (undefined before assignment)
//    and the outer count (5) in the Scope panel.
// 5. Step out to return to outer(), then continue to the top-level script.
//
// Important: changing inner() to an arrow does not remove its local var
// scope. The arrow differs in this/arguments binding, not this var hoisting.
