// File: function_types.js

// Function Types:

// Regular Function: Named function declaration
function regularFunction() {
  console.log("This is a regular function.");
}
regularFunction(); // Outputs: This is a regular function.

// Anonymous Function: No name, often used in expressions or callbacks
const anonymous = function () {
  console.log("This is an anonymous function.");
};
anonymous(); // Outputs: This is an anonymous function.

// IIFE (Immediately Invoked Function Expression): Executes immediately
// Useful for creating a private scope
(function () {
  console.log("This IIFE runs right away!");
})(); // Outputs: This IIFE runs right away!

// IIFE with parameters
((name) => {
  console.log("Hello, " + name + " from IIFE!");
})("Charlie"); // Outputs: Hello, Charlie from IIFE!

// Factory Functions: Functions that return objects
// Useful for creating multiple similar objects without classes
function createPerson(name, age) {
  return {
    name: name,
    age: age,
    greet: function () {
      console.log("Hi, I am " + this.name);
    },
  };
}

const alice = createPerson("Alice", 30);
alice.greet(); // Outputs: Hi, I am Alice

const bob = createPerson("Bob", 25);
bob.greet(); // Outputs: Hi, I am Bob
