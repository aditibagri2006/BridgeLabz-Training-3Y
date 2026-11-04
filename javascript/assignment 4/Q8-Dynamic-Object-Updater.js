// Q8 – Dynamic Object Updater
// Run this file using Q8-Dynamic-Object-Updater.html in a browser.
"use strict";

const user = {
    name: "John",
    email: "john@mail.com",
    age: 21
};

const userForm = document.getElementById("userForm");

// Fill the form with the current object values.
document.getElementById("editName").value = user.name;
document.getElementById("editEmail").value = user.email;
document.getElementById("editAge").value = user.age;

function displayUser() {
    document.getElementById("userDetails").textContent =
        JSON.stringify(user, null, 2);
}

displayUser();

userForm.addEventListener("submit", event => {
    event.preventDefault();

    // Update the same object using the latest form values.
    user.name = document.getElementById("editName").value.trim();
    user.email = document.getElementById("editEmail").value.trim();
    user.age = Number(document.getElementById("editAge").value);

    displayUser();
    console.log("Updated user object:", user);
});
