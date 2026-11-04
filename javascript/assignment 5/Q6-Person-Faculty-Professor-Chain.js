// Q6 – Person → Faculty → Professor Prototype Chain
"use strict";

function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person name: ${this.name}`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Department: ${this.department}`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Subject: ${this.subject}`);
};

const professor = new Professor("Dr. Mehta", "Computer Science", "JavaScript");

// The Professor instance can access methods at every level of the chain.
professor.introduce();       // Person.prototype
professor.showDepartment();  // Faculty.prototype
professor.showSubject();     // Professor.prototype

console.log(professor instanceof Professor); // true
console.log(professor instanceof Faculty);   // true
console.log(professor instanceof Person);    // true

// Prototype chain:
// professor → Professor.prototype → Faculty.prototype
// → Person.prototype → Object.prototype → null
