// Q1 – Dynamic Data Parser
"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidData = [];

console.log("DYNAMIC DATA PARSER REPORT");

for (let index = 0; index < apiData.length; index++) {
    const originalValue = apiData[index];

    // Convert each original value into all three requested forms.
    const numberValue = Number(originalValue);
    const booleanValue = Boolean(originalValue);
    const stringValue = String(originalValue);

    // Number(" ") is 0 in JavaScript, but this assignment asks us to
    // treat a blank/whitespace-only string as invalid numeric input.
    const isBlankString =
        typeof originalValue === "string" && originalValue.trim() === "";

    const isValidNumber = !Number.isNaN(numberValue) && !isBlankString;

    const report = {
        original: stringValue,
        number: numberValue,
        boolean: booleanValue,
        string: stringValue
    };

    if (isValidNumber) {
        validNumericData.push(report);
        console.log(`Valid [${index}]:`, report);
    } else {
        invalidData.push(report);
        console.log(`Invalid [${index}]:`, report);
    }
}

console.log("\nVALID NUMERIC DATA:");
console.log(validNumericData);
console.log("\nINVALID DATA:");
console.log(invalidData);
console.log(`\nValid count: ${validNumericData.length}`);
console.log(`Invalid count: ${invalidData.length}`);

// Debug observation: inspect originalValue, numberValue, isBlankString,
// and isValidNumber in VS Code's Watch panel while stepping through the loop.
