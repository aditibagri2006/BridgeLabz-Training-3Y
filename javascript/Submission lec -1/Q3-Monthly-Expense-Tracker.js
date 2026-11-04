// Q3: Monthly Expense Tracker
// Monthly expenses for five categories (amounts are in rupees).
const expenses = {
    food: 4500,
    travel: 1800,
    rent: 8000,
    bills: 1200,
    leisure: 1500
};

// Add each category amount to the total using the += assignment operator.
let totalExpense = 0;
totalExpense += expenses.food;
totalExpense += expenses.travel;
totalExpense += expenses.rent;
totalExpense += expenses.bills;
totalExpense += expenses.leisure;

const averageExpense = totalExpense / Object.keys(expenses).length;

// Add 10% tax to the total.
const taxRate = 0.10;
let finalAmount = totalExpense;
finalAmount += totalExpense * taxRate;

console.log("Monthly Expense Summary");
console.log(`Total before tax: ₹${totalExpense.toFixed(2)}`);
console.log(`Average expense: ₹${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): ₹${(totalExpense * taxRate).toFixed(2)}`);
console.log(`Final amount after tax: ₹${finalAmount.toFixed(2)}`);
