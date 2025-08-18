// File: console.js

// console.log: Used for standard output, prints messages to the console
console.log("This is a standard log message.");

// console.error: Used for error messages, often highlighted in red in consoles
console.error("This is an error message.");

// console.warn: Used for warning messages, often highlighted in yellow
console.warn("This is a warning message.");

// Example: Debugging with console
let num = 42;
console.log("The value of num is:", num); // Outputs: The value of num is: 42

// Simulating an error condition
if (num > 50) {
  console.error("Number is too large!");
} else {
  console.warn("Number is acceptable, but check if it needs adjustment.");
}
