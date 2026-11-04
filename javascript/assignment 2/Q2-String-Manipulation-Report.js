// Q2. String Manipulation Report

const productName = " wireless headphones PRO ";

// Remove spaces at the beginning and end, then convert to lowercase.
const trimmedName = productName.trim().toLowerCase();

// Capitalize the first character of every word using split(), map(), and join().
const titleCaseName = trimmedName
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

// Replace "Pro" (case-insensitive) with the required product label.
const cleanedTitle = titleCaseName.replace(/pro/i, "Pro Edition");

console.log(`Cleaned product title: ${cleanedTitle}`);
console.log(`Title length: ${cleanedTitle.length} characters`);
