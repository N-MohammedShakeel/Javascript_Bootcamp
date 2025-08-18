// File: objects.js

// Objects: Key-value pairs, unordered collections
let person = {
  name: "Alice", // Property
  age: 30,
  greet: function () {
    // Method
    return "Hi, I am " + this.name;
  },
};

// Accessing properties
console.log(person.name); // Outputs: Alice
console.log(person["age"]); // Outputs: 30
console.log(person.greet()); // Outputs: Hi, I am Alice

// Enhanced Object Literals (ES6+):

// Shorthand properties: When variable name matches property name
let name = "Bob",
  age = 25;
let person2 = { name, age }; // Equivalent to { name: name, age: age }
console.log(person2); // Outputs: { name: 'Bob', age: 25 }

// Shorthand methods: Omit function keyword
let person3 = {
  name: "Charlie",
  greet() {
    // Shorthand method syntax
    return "Hello, " + this.name;
  },
};
console.log(person3.greet()); // Outputs: Hello, Charlie

// Computed property names
let prop = "nickname";
let person4 = {
  [prop]: "Ace", // Computed property name
};
console.log(person4.nickname); // Outputs: Ace

// Adding properties/methods dynamically
person4.sayHi = function () {
  return "Hi from " + this.nickname;
};
console.log(person4.sayHi()); // Outputs: Hi from Ace
