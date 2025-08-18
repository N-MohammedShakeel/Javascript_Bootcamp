// File: destructuring_spread_rest.js

// Destructuring: Unpack elements/properties into variables
// Array destructuring
let [first, second] = ["apple", "banana", "orange"];
console.log(first, second); // Outputs: apple banana

// Object destructuring
let person = { name: "Alice", age: 30 };
let { name, age } = person;
console.log(name, age); // Outputs: Alice 30

// Destructuring with rest: Collect remaining elements/properties
let [head, ...tail] = [1, 2, 3, 4];
console.log(head, tail); // Outputs: 1 [2, 3, 4]

let { name: personName, ...rest } = { name: "Bob", age: 25, city: "Paris" };
console.log(personName, rest); // Outputs: Bob { age: 25, city: 'Paris' }

// Spread Operator: Expands elements or properties
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2); // Outputs: [1, 2, 3, 4]

let obj1 = { a: 1, b: 2 };
let obj2 = { ...obj1, c: 3 };
console.log(obj2); // Outputs: { a: 1, b: 2, c: 3 }

// Combining arrays/objects with spread
let combined = [...arr1, ...[5, 6]];
console.log(combined); // Outputs: [1, 2, 5, 6]

// Rest in function parameters: Collects remaining arguments
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Outputs: 10
