// Q9 – Person → Student Inheritance Using ES6 Classes
"use strict";

class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        // super() calls the parent constructor before using `this`.
        super(name);
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const classStudent = new Student("Aditi", "Computer Science");

console.log("ES6 class inheritance:");
classStudent.showName();
classStudent.showBranch();

// Compare with the constructor/prototype implementation from Q5.
console.log("\nPrototype version (same behavior):");

function PrototypePerson(name) {
    this.name = name;
}

PrototypePerson.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function PrototypeStudent(name, branch) {
    PrototypePerson.call(this, name);
    this.branch = branch;
}

PrototypeStudent.prototype = Object.create(PrototypePerson.prototype);
PrototypeStudent.prototype.constructor = PrototypeStudent;

PrototypeStudent.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const prototypeStudent = new PrototypeStudent("Aditi", "Computer Science");
prototypeStudent.showName();
prototypeStudent.showBranch();

// Both approaches use the prototype chain under the hood.
// `class`, `extends`, and `super()` provide cleaner syntax for inheritance.
