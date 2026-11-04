// Q2 – Student Form Validator (Forms + RegExp)
// Run this file using Q2-Student-Form-Validator.html in a browser.
// This JavaScript file uses DOM APIs, so it is not intended for Node.js.
"use strict";

const registrationForm = document.getElementById("registrationForm");

const validationRules = {
    name: /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/
};

const errorMessages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address, e.g. example@domain.com.",
    phone: "Phone number must contain exactly 10 digits.",
    password: "Password must contain an uppercase letter, a number, and a special character."
};

function validateField(input) {
    const fieldName = input.name;
    const errorElement = document.getElementById(`${fieldName}Error`);
    const isValid = validationRules[fieldName].test(input.value.trim());

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    errorElement.textContent = isValid ? "" : errorMessages[fieldName];

    return isValid;
}

registrationForm.addEventListener("submit", event => {
    event.preventDefault();

    const inputs = [...registrationForm.querySelectorAll("input")];
    const allValid = inputs.map(validateField).every(Boolean);

    if (allValid) {
        document.getElementById("formMessage").textContent =
            "Registration details are valid!";
        document.getElementById("formMessage").style.color = "green";
    } else {
        document.getElementById("formMessage").textContent =
            "Please correct the highlighted fields.";
        document.getElementById("formMessage").style.color = "red";
    }
});

// Validate a field when the user leaves it.
registrationForm.querySelectorAll("input").forEach(input => {
    input.addEventListener("blur", () => validateField(input));
});
