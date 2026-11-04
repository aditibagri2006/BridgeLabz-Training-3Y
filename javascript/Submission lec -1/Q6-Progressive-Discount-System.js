// Q6: Progressive Discount System
// Sample purchase amount. Change this value to test different discount tiers.
const purchaseTotal = 7500;

let discountPercentage;

if (purchaseTotal >= 10000) {
    discountPercentage = 25;
} else if (purchaseTotal >= 5000) {
    discountPercentage = 15;
} else if (purchaseTotal >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0;
}

const discountAmount = purchaseTotal * (discountPercentage / 100);
const finalPrice = Math.round(purchaseTotal - discountAmount);

console.log("Shopping Bill");
console.log(`Original Total: ₹${Math.round(purchaseTotal)}`);
console.log(`Discount: ${discountPercentage}%`);
console.log(`Discount Amount: ₹${Math.round(discountAmount)}`);
console.log(`Final Price: ₹${finalPrice}`);
