// Q8. Dynamic Discount Evaluator

const cart = [
    { item: "Laptop", category: "electronics", price: 45000 },
    { item: "Shoes", category: "fashion", price: 2500 },
    { item: "Book", category: "education", price: 600 }
];

// Calculate the original cart value using reduce().
const originalTotal = cart.reduce((total, product) => total + product.price, 0);

let discountedSubtotal = 0;

// Apply category-specific discounts using a loop and conditionals.
console.log("CART DISCOUNT DETAILS");

for (const product of cart) {
    let discountRate = 0;

    if (product.category === "electronics") {
        discountRate = 0.10;
    } else if (product.category === "fashion") {
        discountRate = 0.05;
    }

    const discountAmount = product.price * discountRate;
    const finalItemPrice = product.price - discountAmount;
    discountedSubtotal += finalItemPrice;

    console.log(
        `${product.item}: Original ₹${product.price.toFixed(2)}, ` +
        `Discount ₹${discountAmount.toFixed(2)}, ` +
        `Final ₹${finalItemPrice.toFixed(2)}`
    );
}

// The extra 5% applies when the ORIGINAL cart value is greater than ₹50,000.
let extraDiscount = 0;

if (originalTotal > 50000) {
    extraDiscount = discountedSubtotal * 0.05;
}

const finalTotal = discountedSubtotal - extraDiscount;

console.log(`Original cart value: ₹${originalTotal.toFixed(2)}`);
console.log(`Subtotal after category discounts: ₹${discountedSubtotal.toFixed(2)}`);
console.log(`Extra cart discount: ₹${extraDiscount.toFixed(2)}`);
console.log(`Final amount to pay: ₹${finalTotal.toFixed(2)}`);
