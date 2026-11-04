// Q5 – Person and Student: Prototype Inheritance
"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    // Call the parent constructor to initialize the name property.
    Person.call(this, name);
    this.branch = branch;
}

// Set up inheritance: Student.prototype inherits from Person.prototype.
Student.prototype = Object.create(Person.prototype);

// Restore the constructor reference after replacing the prototype object.
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Aditi", "Computer Science");

student.showName();   // Inherited from Person.prototype.
student.showBranch(); // Defined on Student.prototype.

// Prototype chain:
// student → Student.prototype → Person.prototype → Object.prototype → null
console.log(student instanceof Student); // true
console.log(student instanceof Person);  // true
