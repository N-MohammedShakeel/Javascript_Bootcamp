// File: main.js
// Module: Importing and using functions from mathUtils.js

// Named imports: Import specific functions
import { add, subtract } from "./mathUtils.js";

// Default import: Can use any name for default export
import multiply from "./mathUtils.js";

// Using imported functions
console.log(add(5, 3)); // Outputs: 8
console.log(subtract(5, 3)); // Outputs: 2
console.log(multiply(5, 3)); // Outputs: 15

// Exporting multiple items as an object
export const utilities = {
  square: (num) => num * num,
  cube: (num) => num ** 3,
};

// Re-exporting from another module
export { add as addNumbers } from "./mathUtils.js";
