// Q7 – Login Form Validation using RegExp
// Run this file using Q7-Login-Form-Validation.html in a browser.
"use strict";

const loginForm = document.getElementById("loginForm");

const usernamePattern = /^.{5,}$/;
const passwordChecks = [
    { pattern: /.{8,}/, message: "Password must be at least 8 characters long." },
    { pattern: /[0-9]/, message: "Password must include at least one number." },
    { pattern: /[A-Z]/, message: "Password must include at least one uppercase letter." },
    { pattern: /[a-z]/, message: "Password must include at least one lowercase letter." },
    { pattern: /[^A-Za-z0-9]/, message: "Password must include at least one special character." }
];

loginForm.addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errors = [];

    if (!usernamePattern.test(username)) {
        errors.push("Username must contain at least 5 characters.");
    }

    passwordChecks.forEach(check => {
        if (!check.pattern.test(password)) {
            errors.push(check.message);
        }
    });

    const message = document.getElementById("loginMessage");

    if (errors.length > 0) {
        message.style.color = "red";
        message.textContent = errors.join(" ");
    } else {
        message.style.color = "green";
        message.textContent = "Login validation successful!";
    }
});
