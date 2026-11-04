// Q10. Departmental Employee Evaluator

const departments = [
    ["HR", 72],
    ["Finance", 88],
    ["Tech", 95],
    ["Support", 63]
];

console.log("DEPARTMENT PERFORMANCE REPORT");

// Loop through the nested array.
for (const department of departments) {
    const departmentName = department[0];
    const score = department[1];
    let performance;

    // Nested if-else conditions classify the department's score.
    if (score >= 90) {
        performance = "Excellent";
    } else {
        if (score >= 75) {
            performance = "Good";
        } else {
            if (score >= 60) {
                performance = "Average";
            } else {
                performance = "Needs Improvement";
            }
        }
    }

    console.log(`${departmentName}: ${score} - ${performance}`);
}
