// Q8 – Strict Mode Showdown
// The Function constructor lets this file demonstrate sloppy and strict
// function bodies separately, even though this outer file uses strict mode.
"use strict";

console.log("WITHOUT STRICT MODE (sloppy function):");

const sloppyDemo = Function(`
    function demo(a, a) {
        total = 10;
        delete total;
        console.log("Duplicate parameters accepted:", a);
        console.log("Implicit global total:", globalThis.total);
    }
    demo(5, 10);
`);

try {
    sloppyDemo();
    console.log("Sloppy mode: duplicate parameter names and implicit global assignment are allowed.");
} catch (error) {
    console.log(`Sloppy mode error: ${error.name} - ${error.message}`);
}

console.log("\nWITH STRICT MODE:");

try {
    // Strict mode rejects duplicate parameter names during parsing.
    // The function body therefore throws SyntaxError before it can run.
    const strictDemo = Function(`
        "use strict";
        function demo(a, a) {
            total = 10;
            delete total;
        }
        demo(5, 10);
    `);
    strictDemo();
} catch (error) {
    console.log(`Strict mode error: ${error.name} - ${error.message}`);
}

console.log("\nCORRECT ES6 VERSION:");

function correctDemo(first, second) {
    "use strict";

    let total = 10; // Explicit declaration; no accidental global.
    console.log(`First: ${first}, Second: ${second}, Total: ${total}`);

    // Delete an object property rather than a variable identifier.
    const temporaryData = { total: total };
    delete temporaryData.total;
    console.log(`Property deleted: ${!("total" in temporaryData)}`);
}

correctDemo(5, 10);

// Explanation:
// - Sloppy mode permits duplicate parameter names in a normal function and
//   may create an implicit global when assigning to an undeclared identifier.
// - Strict mode rejects duplicate parameter names and undeclared assignments.
// - `delete total` attempts to delete an identifier; strict mode disallows it.
// - Use let/const for variables and delete only for configurable object properties.
