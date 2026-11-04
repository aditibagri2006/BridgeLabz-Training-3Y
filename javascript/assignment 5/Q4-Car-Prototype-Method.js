// Q4 – Car Constructor and Prototype Method
"use strict";

function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Add one shared method to Car.prototype, not separately to each car.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const firstCar = new Car("Toyota", "Fortuner");
const secondCar = new Car("Hyundai", "Creta");

firstCar.getDetails();
secondCar.getDetails();

// Both objects use the same function stored on Car.prototype.
console.log(
    "Shared prototype method:",
    firstCar.getDetails === secondCar.getDetails
); // true
