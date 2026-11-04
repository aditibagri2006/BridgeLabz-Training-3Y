// Q6. Event-Based Counter Simulation

// createCounter() keeps count in its local scope.
function createCounter() {
    let count = 0;

    // Nested function: it can access count from the outer function's scope.
    function showCount() {
        console.log(`Current count: ${count}`);
    }

    // These functions update the same count variable.
    function increment() {
        count++;
        showCount();
    }

    function decrement() {
        count--;
        showCount();
    }

    // Return the functions so they can be called to simulate clicks.
    return { increment, decrement };
}

const counter = createCounter();

// Simulate button clicks manually.
console.log("Simulating clicks:");
counter.increment(); // 1
counter.increment(); // 2
counter.increment(); // 3
counter.decrement(); // 2
counter.decrement(); // 1
