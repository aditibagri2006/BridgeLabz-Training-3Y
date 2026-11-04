// Q7. Customer Feedback Processor

const feedback = "Great product! Fast delivery and amazing sound quality!";

// Convert to lowercase so checks work regardless of capitalization.
const normalizedFeedback = feedback.toLowerCase();

// split() separates the feedback into words.
const words = normalizedFeedback.split(/\s+/).filter(word => word.length > 0);
const wordCount = words.length;

// includes() checks whether either negative keyword appears.
const hasBad = normalizedFeedback.includes("bad");
const hasPoor = normalizedFeedback.includes("poor");

console.log(`Feedback: ${feedback}`);
console.log(`Word count: ${wordCount}`);

if (!hasBad && !hasPoor) {
    console.log("Positive Feedback");
} else {
    console.log("Needs Improvement");
}
