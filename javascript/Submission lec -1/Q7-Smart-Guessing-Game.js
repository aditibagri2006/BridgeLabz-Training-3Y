// Q7: Smart Guessing Game (Number Range)
// Generate a random integer from 1 through 50.
const secretNumber = Math.floor(Math.random() * 50) + 1;

// Test guess: change this value or use prompt() in a browser.
const userGuess = 24;

if (userGuess === secretNumber) {
    console.log("Correct guess!");
} else {
    // Check whether the guess is within 3 numbers of the secret number.
    if (Math.abs(userGuess - secretNumber) <= 3) {
        console.log("Very close!");
    } else if (userGuess > secretNumber) {
        console.log("Too high");
    } else {
        console.log("Too low");
    }
}

// Helpful while testing; remove this line if you want to hide the secret.
console.log(`Secret number (testing): ${secretNumber}`);
