// Q1 – E-Commerce Product Manager (Classes + Objects)
"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    applyDiscount(discountPercent) {
        if (discountPercent < 0 || discountPercent > 100) {
            throw new RangeError("Discount must be between 0 and 100.");
        }

        this.price -= this.price * (discountPercent / 100);
    }

    displayDetails() {
        return `ID: ${this.id} | ${this.name} | Category: ${this.category} | Price: ₹${this.price.toFixed(2)}`;
    }
}

const products = [
    new Product(101, "Wireless Headphones", 2499, "Electronics"),
    new Product(102, "Notebook", 250, "Stationery"),
    new Product(103, "Smart Watch", 3999, "Electronics"),
    new Product(104, "Water Bottle", 799, "Accessories")
];

// Apply a 10% discount to the first product.
products[0].applyDiscount(10);

console.log("ALL PRODUCTS:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nPRODUCTS WITH PRICE ABOVE ₹1000:");
const expensiveProducts = products.filter(product => product.price > 1000);
expensiveProducts.forEach(product => console.log(product.displayDetails()));
