// File: template_literals.js

// Template Literals: String literals with embedded expressions
// Use backticks (`) and ${} for interpolation

let name = "Alice";
let age = 30;

// Basic interpolation
let greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // Outputs: Hello, Alice! You are 30 years old.

// Expressions inside ${}
let price = 10,
  quantity = 5;
let total = `Total cost: $${price * quantity}`;
console.log(total); // Outputs: Total cost: $50

// Multi-line strings: No need for \n
let poem = `
Roses are red,
Violets are blue,
Template literals
Make coding fun too!
`;
console.log(poem);

// Tagged templates: Function processes template literal
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    return result + str + (values[i] ? `<b>${values[i]}</b>` : "");
  }, "");
}
let result = highlight`Hello, ${name}! You are ${age}.`;
console.log(result); // Outputs: Hello, <b>Alice</b>! You are <b>30</b>.
