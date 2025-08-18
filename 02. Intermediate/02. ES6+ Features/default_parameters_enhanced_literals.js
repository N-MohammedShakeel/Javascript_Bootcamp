// File: default_parameters_enhanced_literals.js
// Default Parameters and Enhanced Object Literals

// Default Parameters: Provide fallback values for function parameters
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet()); // Outputs: Hello, Guest!
console.log(greet("Alice")); // Outputs: Hello, Alice!
console.log(greet("Bob", "Hi")); // Outputs: Hi, Bob!

// Enhanced Object Literals: Shorthand syntax for properties and methods

// Shorthand properties: When variable name matches property name
let name = "Charlie",
  age = 25;
let person = { name, age }; // Equivalent to { name: name, age: age }
console.log(person); // Outputs: { name: 'Charlie', age: 25 }

// Shorthand methods: Omit 'function' keyword
let calculator = {
  add(a, b) {
    // Shorthand method syntax
    return a + b;
  },
  subtract(a, b) {
    return a - b;
  },
};
console.log(calculator.add(5, 3)); // Outputs: 8
console.log(calculator.subtract(5, 3)); // Outputs: 2

// Computed property names: Use expressions as property keys
let prop = "nickname";
let user = {
  [prop]: "Ace",
  ["get" + prop.charAt(0).toUpperCase() + prop.slice(1)]() {
    return this.nickname;
  },
};
console.log(user.nickname); // Outputs: Ace
console.log(user.getNickname()); // Outputs: Ace
