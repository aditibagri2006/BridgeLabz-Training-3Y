// Q4 – Debugging Mystery
"use strict";

// Original problem:
// greeting = "Welcome"; // ReferenceError in strict mode because greeting
// has not been declared with let, const, or var.

function showMessage() {
    // Fix: declare greeting inside the function.
    const greeting = "Welcome";
    console.log(greeting);
}

showMessage();

// Scope explanation:
// greeting is local to showMessage(). It can be used inside this function,
// but it is not available outside the function.

// Debugging exercise:
// 1. Put a breakpoint on the const greeting line.
// 2. Add `greeting` to the Watch panel.
// 3. Step over the declaration and inspect its value.
// 4. Inspect the Call Stack: showMessage() is called by the top-level script.
// 5. Continue execution and observe the function return.
