// File: higher_order_function.js

// Higher-Order Functions: Functions that take or return functions
// Array helper methods are common examples

let numbers = [1, 2, 3, 4, 5];

// map: Transform each element
let squares = numbers.map((num) => num * num);
console.log(squares); // Outputs: [1, 4, 9, 16, 25]

// filter: Keep elements that pass test
let evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // Outputs: [2, 4]

// find: Return first element that passes test
let firstEven = numbers.find((num) => num % 2 === 0);
console.log(firstEven); // Outputs: 2

// reduce: Reduce array to a single value
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Outputs: 15

// forEach: Execute function for each element, no return
numbers.forEach((num) => console.log(num * 2)); // Outputs: 2, 4, 6, 8, 10

// some: Check if at least one element passes test
let hasOdd = numbers.some((num) => num % 2 !== 0);
console.log(hasOdd); // Outputs: true

// every: Check if all elements pass test
let allPositive = numbers.every((num) => num > 0);
console.log(allPositive); // Outputs: true

// sort: Sort array (mutates original)
let names = ["Charlie", "Alice", "Bob"];
names.sort(); // Sorts alphabetically
console.log(names); // Outputs: ['Alice', 'Bob', 'Charlie']

// Custom sort with comparator
let nums = [10, 2, 5];
nums.sort((a, b) => a - b); // Numeric sort
console.log(nums); // Outputs: [2, 5, 10]
