// Q2 – Employee Bonus Calculator
"use strict";

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

console.log("EMPLOYEE BONUS REPORT");

for (const employee of employees) {
    try {
        // Validate required properties before converting their values.
        if (
            employee === null ||
            typeof employee !== "object" ||
            !("name" in employee) ||
            !("salary" in employee) ||
            !("years" in employee)
        ) {
            throw new Error("Employee data is missing a required property.");
        }

        const salary = Number(employee.salary);
        const years = Number(employee.years);

        if (!Number.isFinite(salary) || !Number.isFinite(years)) {
            throw new TypeError("Salary or years could not be converted to a valid number.");
        }

        const bonusRate = years > 3 ? 0.10 : 0.05;
        const bonus = salary * bonusRate;
        const totalSalary = salary + bonus;

        console.log(
            `${employee.name}: Salary ₹${salary.toFixed(2)}, ` +
            `Experience ${years} years, Bonus ₹${bonus.toFixed(2)}, ` +
            `Total ₹${totalSalary.toFixed(2)}`
        );
    } catch (error) {
        console.log(`Employee processing error: ${error.message}`);
    }
}

// "use strict" prevents accidental assignments to undeclared variables.
// All variables above are explicitly declared with const/let.
