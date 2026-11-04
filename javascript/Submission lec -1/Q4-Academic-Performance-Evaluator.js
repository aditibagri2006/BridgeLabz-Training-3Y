// Q4: Academic Performance Evaluator
// Sample marks for five subjects. Replace these values to test other cases.
const marks = [88, 91, 79, 85, 90];

// Calculate total, average and percentage.
// Assuming each subject is out of 100.
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = (totalMarks / (marks.length * 100)) * 100;

// A student is automatically detained if any subject mark is below 35.
const hasFailedSubject = marks.some(mark => mark < 35);

let result;

if (hasFailedSubject || percentage < 50) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50 && percentage < 85) {
    result = "Promoted";
}

console.log("Marks:", marks);
console.log(`Total Marks: ${totalMarks}/500`);
console.log(`Average: ${average.toFixed(2)}`);
console.log(`Overall Percentage: ${percentage.toFixed(2)}%`);
console.log(`Result: ${result}`);
