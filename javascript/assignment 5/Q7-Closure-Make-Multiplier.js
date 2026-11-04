// Q7 – Closure: Make Multiplier
"use strict";

function makeMultiplier(multiplier) {
    // The returned inner function remembers this multiplier value.
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log(triple(5)); // 15
console.log(double(5)); // 10

// Closure explanation:
// makeMultiplier() finishes running, but the returned function still has
// access to the multiplier variable from its outer lexical environment.
// Each call to makeMultiplier() creates a separate remembered multiplier.
