// File: function_definitions.js

// Defining functions:

// Function Declaration: Hoisted, can be called before definition
function greet(name) {
  // 'name' is a parameter
  return "Hello, " + name + "!"; // Return statement sends back a value
}

// Calling the function with an argument
let message = greet("Alice"); // 'Alice' is an argument
console.log(message); // Outputs: Hello, Alice!

// Function Expression: Assigned to a variable, not hoisted
const add = function (a, b) {
  // Parameters a and b
  return a + b; // Returns the sum
};

console.log(add(5, 3)); // Outputs: 8

/*
Functions can have default parameters (ES6+).
If no argument is provided, default is used.
*/
function multiply(x, y = 2) {
  return x * y;
}

console.log(multiply(4)); // Outputs: 8 (uses default y=2)
console.log(multiply(4, 3)); // Outputs: 12

// Functions without return statement return undefined
function noReturn() {
  console.log("No return");
}
console.log(noReturn()); // Outputs: undefined
