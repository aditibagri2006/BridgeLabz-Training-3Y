// Q1. Scope Conflict Resolver

// Global variable: available throughout this file.
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variables: available only inside calculateSalary().
    let salary = 40000;
    let totalSalary = salary;

    // Add the global bonus only when the local parameter is true.
    if (isPermanent === true) {
        totalSalary += bonus;
    }

    console.log(`Permanent employee: ${isPermanent}`);
    console.log(`Total salary: ₹${totalSalary}`);
}

// Test both possible values of the local isPermanent variable.
calculateSalary(true);
calculateSalary(false);

// The global bonus is not changed by the local isPermanent variable.
console.log(`Global bonus after function calls: ₹${bonus}`);
