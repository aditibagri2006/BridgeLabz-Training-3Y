// Q4. Array Performance Analyzer

// Generate 8 random integer scores between 30 and 100 (both inclusive).
const scores = Array.from(
    { length: 8 },
    () => Math.floor(Math.random() * 71) + 30
);

// Use map() to create a numbered list of scores.
const numberedScores = scores.map((score, index) => ({
    student: index + 1,
    score: score
}));

// Use Math.max() and Math.min() with the spread operator.
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);

// Use reduce() to calculate the total and average.
const totalScore = scores.reduce((total, score) => total + score, 0);
const averageScore = totalScore / scores.length;

// Use filter() to count students who passed (score >= 50).
const passedScores = scores.filter(score => score >= 50);

console.log("STUDENT PERFORMANCE REPORT");
console.table(numberedScores);
console.log(`Highest score: ${highestScore}`);
console.log(`Lowest score: ${lowestScore}`);
console.log(`Average score: ${averageScore.toFixed(2)}`);
console.log(`Students passed: ${passedScores.length} out of ${scores.length}`);
