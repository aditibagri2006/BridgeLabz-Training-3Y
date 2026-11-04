// Q5. Boolean Logic Access System

function checkSecurity(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside) {
    // All four conditions must be true for the system to be Secure.
    const isSecure = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;

    // Use ! to show the opposite state as well.
    if (isSecure) {
        console.log("Secure");
    } else {
        console.log("Unsafe");
    }

    console.log(`Not secure: ${!isSecure}`);
}

// Test 1: all required conditions are true.
console.log("Test 1:");
checkSecurity(true, true, true, true);

// Test 2: the window is open.
console.log("Test 2:");
checkSecurity(true, false, true, true);

// Test 3: the owner is outside.
console.log("Test 3:");
checkSecurity(true, true, true, false);

// Example of OR (||): alert if either entry point is not secured.
const isDoorLocked = true;
const isWindowClosed = false;
const entryPointAtRisk = !isDoorLocked || !isWindowClosed;
console.log(`Entry point at risk: ${entryPointAtRisk}`);
