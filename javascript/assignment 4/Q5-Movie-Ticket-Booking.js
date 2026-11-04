// Q5 – Movie Ticket Booking (Objects + RegExp)
// Run this file using Q5-Movie-Ticket-Booking.html in a browser.
"use strict";

const bookingForm = document.getElementById("bookingForm");

const namePattern = /^[A-Za-z]+(?:\s+[A-Za-z]+)*$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

bookingForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("customerName").value.trim();
    const email = document.getElementById("customerEmail").value.trim();
    const seatsText = document.getElementById("seatCount").value.trim();
    const seats = Number(seatsText);

    const errors = [];

    if (!namePattern.test(name)) {
        errors.push("Name must contain alphabets only.");
    }

    if (!emailPattern.test(email)) {
        errors.push("Enter a valid email address.");
    }

    if (!Number.isInteger(seats) || seats < 1 || seats > 10) {
        errors.push("Seats must be a whole number from 1 to 10.");
    }

    const output = document.getElementById("bookingOutput");

    if (errors.length > 0) {
        output.style.color = "red";
        output.textContent = errors.join("\n");
        return;
    }

    const booking = { name, email, seats };

    output.style.color = "green";
    output.textContent =
        `BOOKING CONFIRMED\nName: ${booking.name}\nEmail: ${booking.email}\nSeats: ${booking.seats}`;

    console.log("Booking object:", booking);
});
