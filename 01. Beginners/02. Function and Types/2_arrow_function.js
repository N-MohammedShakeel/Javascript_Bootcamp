// File: arrow_functions.js

// Arrow Functions: Concise syntax introduced in ES6
// Syntax: (parameters) => { body } or (parameters) => expression for single line

// Basic arrow function
const square = (x) => {
  return x * x;
};
console.log(square(5)); // Outputs: 25

// Concise syntax: Omit {} and return for single expression
const double = (x) => x * 2;
console.log(double(3)); // Outputs: 6

// No parameters: Use empty ()
const hello = () => "Hello!";
console.log(hello()); // Outputs: Hello!

// Single parameter: Can omit ()
const cube = (x) => x ** 3;
console.log(cube(2)); // Outputs: 8

/*
Lexical 'this': Arrow functions do not have their own 'this'.
They inherit 'this' from the enclosing scope.
Useful in callbacks and methods.
*/

// Example with regular function (loses 'this')
const person = {
  name: "Bob",
  sayHi: function () {
    setTimeout(function () {
      console.log("Hi, " + this.name); // 'this' is undefined here
    }, 1000);
  },
};
// person.sayHi(); // Outputs: Hi, undefined

// With arrow function (lexical 'this')
const personArrow = {
  name: "Bob",
  sayHi: function () {
    setTimeout(() => {
      console.log("Hi, " + this.name); // 'this' refers to personArrow
    }, 1000);
  },
};
// personArrow.sayHi(); // Outputs: Hi, Bob (after 1 second)
