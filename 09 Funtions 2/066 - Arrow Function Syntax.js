/*
    ==============================
    📌 ARROW FUNCTIONS
    ==============================
    - Introduced in ES6.
    - Shorter syntax.
    - Does NOT have its own 'this', uses lexical 'this'.
*/

// 1. Normal function
const add = function (a, b) {
  return a + b;
};

// 2. Arrow function equivalent
const addArrow = (a, b) => a + b;

console.log(add(3, 4)); // 7
console.log(addArrow(3, 4)); // 7

// Arrow function with single parameter
const square = (x) => x * x;
console.log(square(5)); // 25

// Arrow function with no parameters
const sayHi = () => console.log("Hi!");
sayHi();

// Arrow function returning object
const createUser = (name, age) => ({ name, age });
console.log(createUser("Alice", 25));
