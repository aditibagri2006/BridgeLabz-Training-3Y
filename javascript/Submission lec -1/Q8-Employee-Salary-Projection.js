// Q8: Employee Salary Projection
const currentSalary = 40000;       // Monthly salary in rupees
const annualIncrementRate = 8;     // Annual increment percentage

let projectedSalary = currentSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    // Increase the salary by the annual increment rate.
    projectedSalary *= (1 + annualIncrementRate / 100);
    projectedSalary = Math.round(projectedSalary);

    salaryReport.push({
        Year: year,
        "Monthly Salary (₹)": projectedSalary
    });
}

// Display all five yearly projections in one formatted table.
console.table(salaryReport);
