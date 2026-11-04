// Q2: Multi-Type Data Summary
// Declare sample values representing different JavaScript data types.
const userName = "Aditi";                         // string
const userAge = 21;                              // number
const isStudent = true;                          // boolean
const skills = ["HTML", "CSS", "JavaScript"];    // array
const address = { city: "Mathura", state: "UP" };// object
const middleName = null;                         // null
let phoneNumber;                                 // undefined

// Array.isArray() is needed because typeof [] returns "object".
const dataReport = [
    { Label: "User Name", Value: userName, Type: typeof userName },
    { Label: "User Age", Value: userAge, Type: typeof userAge },
    { Label: "Is Student", Value: isStudent, Type: typeof isStudent },
    { Label: "Skills", Value: skills.join(", "), Type: Array.isArray(skills) ? "array" : typeof skills },
    { Label: "Address", Value: JSON.stringify(address), Type: typeof address },
    { Label: "Middle Name", Value: middleName, Type: middleName === null ? "null" : typeof middleName },
    { Label: "Phone Number", Value: phoneNumber, Type: typeof phoneNumber }
];

// Print the complete report in one console.table() statement.
console.table(dataReport);
