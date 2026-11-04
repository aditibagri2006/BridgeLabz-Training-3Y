// Q5: Weather Activity Planner
const temperature = 28; // Temperature in Celsius
const isRaining = false;
const windSpeed = 12;   // Wind speed in km/h

let advice;

// Check rain first, then temperature and wind conditions.
if (isRaining) {
    advice = "Stay indoors with hot coffee.";
} else if (temperature > 35) {
    advice = "Go swimming.";
} else if (temperature < 15 && windSpeed > 20) {
    advice = "Too cold and windy — stay home.";
} else if ((temperature >= 15 && temperature <= 35) || windSpeed <= 20) {
    advice = "Perfect day for a walk.";
} else {
    advice = "Consider checking the weather before going out.";
}

console.log(`Temperature: ${temperature}°C`);
console.log(`Raining: ${isRaining}`);
console.log(`Wind Speed: ${windSpeed} km/h`);
console.log(`Suggestion: ${advice}`);
