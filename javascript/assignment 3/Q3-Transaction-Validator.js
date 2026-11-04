// Q3 – Transaction Validator
"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

const validTransactions = [];
const invalidTransactions = [];

class NegativeAmountError extends Error {
    constructor(message) {
        super(message);
        this.name = "NegativeAmountError";
    }
}

class MissingTransactionDataError extends Error {
    constructor(message) {
        super(message);
        this.name = "MissingTransactionDataError";
    }
}

class NullTransactionError extends Error {
    constructor(message) {
        super(message);
        this.name = "NullTransactionError";
    }
}

console.log("TRANSACTION VALIDATION REPORT");

for (let index = 0; index < transactions.length; index++) {
    const transaction = transactions[index];

    try {
        if (transaction === null) {
            throw new NullTransactionError("Transaction entry is null.");
        }

        if (transaction.id === undefined || transaction.amount === undefined) {
            throw new MissingTransactionDataError("Transaction is missing id or amount.");
        }

        if (transaction.amount < 0) {
            throw new NegativeAmountError("Transaction amount cannot be negative.");
        }

        validTransactions.push(transaction);
        console.log(`Transaction ${transaction.id}: VALID`);
    } catch (error) {
        invalidTransactions.push({
            index: index + 1,
            errorType: error.name,
            message: error.message
        });
        console.log(`Transaction at position ${index + 1}: ${error.name} - ${error.message}`);
    }
}

console.log("\nVALID TRANSACTIONS:");
console.log(validTransactions);
console.log("\nINVALID TRANSACTIONS:");
console.log(invalidTransactions);
console.log(`Successful: ${validTransactions.length}`);
console.log(`Failed: ${invalidTransactions.length}`);

// Debugging: set a breakpoint on `const transaction = transactions[index]`.
// Watch `index`, `transaction`, `validTransactions`, and `invalidTransactions`.
// Step over the checks to see which custom error is thrown and caught.
