// Q10: Citizen Eligibility Validator
// Sample input values. Change them to test different eligibility cases.
const age = 22;
const isCitizen = true;

let eligibilityMessage;

// The assignment's conditions overlap for citizens aged 18–20.
// To make the outcomes distinct, this solution interprets ages 18–20
// as "vote only" and age 21+ as "all services".
if (isCitizen) {
    if (age >= 21) {
        eligibilityMessage = "Eligible for all services.";
    } else if (age >= 18 && age <= 20) {
        eligibilityMessage = "Eligible to vote only.";
    } else {
        eligibilityMessage = "Not eligible yet.";
    }
} else {
    if (age >= 18) {
        eligibilityMessage = "Only age criteria met.";
    } else {
        eligibilityMessage = "Not eligible yet.";
    }
}

console.log(`Age: ${age}`);
console.log(`Citizen: ${isCitizen}`);
console.log(eligibilityMessage);
