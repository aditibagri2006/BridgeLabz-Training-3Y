// Q9 – JSON Audit
"use strict";

const rawData = [
    '{"user":"Alex","age":25}',
    '{"id":2}',
    '{invalid}',
    '{"user":"Mina","age":"22"}'
];

const cleanData = [];
const auditErrors = [];

console.log("JSON AUDIT REPORT");

for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;

    try {
        const parsedEntry = JSON.parse(rawData[index]);

        // Detect required keys even if their values are empty or undefined.
        if (!Object.prototype.hasOwnProperty.call(parsedEntry, "user")) {
            throw new Error("Missing required key: user");
        }

        if (!Object.prototype.hasOwnProperty.call(parsedEntry, "age")) {
            throw new Error("Missing required key: age");
        }

        const age = Number(parsedEntry.age);

        if (!Number.isFinite(age)) {
            throw new Error("Age is not a valid number.");
        }

        cleanData.push({
            user: parsedEntry.user,
            age: age
        });

        console.log(`Line ${lineNumber}: valid JSON record`);
    } catch (error) {
        auditErrors.push({
            line: lineNumber,
            message: error.message
        });
        console.log(`Line ${lineNumber}: ERROR - ${error.message}`);
    }
}

// Bonus: filter users under 18 after converting age to Number.
const under18Users = cleanData.filter(user => user.age < 18);

console.log("\nCLEAN DATA:");
console.log(cleanData);
console.log("\nUSERS UNDER 18:");
console.log(under18Users);
console.log("\nAUDIT ERRORS:");
console.log(auditErrors);
console.log(`Valid records: ${cleanData.length}`);
console.log(`Invalid records: ${auditErrors.length}`);

// Debugging: put a breakpoint on JSON.parse(). Step through each iteration.
// When JSON.parse throws, execution jumps directly to catch; the loop then
// continues with the next line of rawData.
