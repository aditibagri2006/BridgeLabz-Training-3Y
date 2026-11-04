// Q3 – Arrow Function vs Normal Function: `this`
"use strict";

const user = {
    name: "Aditi",

    // Arrow functions do not create their own `this`.
    // Here, `this` is inherited from the surrounding scope (top level).
    showName: () => {
        console.log("Arrow function this.name:", this.name);
    }
};

user.showName(); // Usually undefined in a Node.js module.

// Fix: use a normal method function, which gets `this` from the call site.
const correctedUser = {
    name: "Aditi",

    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

correctedUser.showName(); // Aditi

// Explanation:
// Calling correctedUser.showName() sets `this` to correctedUser.
// An arrow function instead captures `this` lexically from its outer scope,
// so it does not point to the `user` object.
