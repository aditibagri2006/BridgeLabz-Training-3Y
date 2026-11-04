// Q6 – Employee Management System (Classes + Object Methods)
"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary;
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (percent < 0) {
            throw new RangeError("Bonus percentage cannot be negative.");
        }

        this.salary += this.salary * (percent / 100);
    }
}

const employees = [
    new Employee(1, "Amit", "HR", 35000),
    new Employee(2, "Sara", "Finance", 42000),
    new Employee(3, "Kiran", "Technology", 55000),
    new Employee(4, "Neha", "Marketing", 39000),
    new Employee(5, "Rohan", "Support", 32000)
];

// Apply a 5% bonus to each employee before calculating annual payout.
employees.forEach(employee => employee.applyBonus(5));

console.log("EMPLOYEE ANNUAL SALARIES:");

employees.forEach(employee => {
    console.log(
        `${employee.name} (${employee.department}): ` +
        `₹${employee.getAnnualSalary().toFixed(2)} per year`
    );
});

// reduce() adds the annual salary of all employees.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(`\nTotal annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
