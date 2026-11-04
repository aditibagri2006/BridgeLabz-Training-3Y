// Q9 – Shopping Cart Total (Classes + RegExp for Coupon)
"use strict";

class Cart {
    constructor() {
        this.items = [];
    }

    addItem(name, price, quantity) {
        if (price < 0 || quantity <= 0) {
            throw new RangeError("Price must be non-negative and quantity must be positive.");
        }

        this.items.push({ name, price, quantity });
    }

    getTotal() {
        return this.items.reduce(
            (total, item) => total + item.price * item.quantity,
            0
        );
    }

    applyCoupon(couponCode) {
        // Accept coupon codes such as SAVE20 or DISC10.
        const couponPattern = /^(SAVE|DISC)(\d{1,2})$/i;
        const match = couponCode.match(couponPattern);

        if (!match) {
            return {
                valid: false,
                message: "Invalid coupon. Use a code like SAVE20 or DISC10."
            };
        }

        const discountPercent = Number(match[2]);

        if (discountPercent <= 0 || discountPercent > 100) {
            return {
                valid: false,
                message: "Coupon discount must be between 1% and 100%."
            };
        }

        const originalTotal = this.getTotal();
        const discountAmount = originalTotal * (discountPercent / 100);

        return {
            valid: true,
            discountPercent,
            originalTotal,
            discountAmount,
            finalTotal: originalTotal - discountAmount
        };
    }

    displayItems() {
        console.log("SHOPPING CART ITEMS:");
        this.items.forEach(item => {
            console.log(
                `${item.name}: ₹${item.price.toFixed(2)} x ${item.quantity} = ` +
                `₹${(item.price * item.quantity).toFixed(2)}`
            );
        });
    }
}

const cart = new Cart();

cart.addItem("Wireless Headphones", 2500, 1);
cart.addItem("Notebook", 100, 3);
cart.addItem("Smart Watch", 4000, 1);

cart.displayItems();

console.log(`\nCart total: ₹${cart.getTotal().toFixed(2)}`);

const couponResult = cart.applyCoupon("SAVE20");

if (couponResult.valid) {
    console.log(`Coupon discount: ${couponResult.discountPercent}%`);
    console.log(`Discount amount: ₹${couponResult.discountAmount.toFixed(2)}`);
    console.log(`Final total: ₹${couponResult.finalTotal.toFixed(2)}`);
} else {
    console.log(couponResult.message);
}
