// File: arrays.js

// Arrays: Ordered, integer-indexed collections
// Creation: Using literal notation or Array constructor
let fruits = ["apple", "banana", "orange"];
let numbers = new Array(1, 2, 3);

// Array Methods:

// push: Adds elements to the end
fruits.push("grape"); // fruits: ['apple', 'banana', 'orange', 'grape']
console.log(fruits);

// pop: Removes and returns the last element
let last = fruits.pop(); // last: 'grape', fruits: ['apple', 'banana', 'orange']
console.log(last);

// splice: Adds/removes elements at specific index
// splice(start, deleteCount, ...items)
fruits.splice(1, 1, "mango"); // Removes 'banana', adds 'mango'
console.log(fruits); // Outputs: ['apple', 'mango', 'orange']

// map: Creates new array by applying function to each element
let lengths = fruits.map((item) => item.length);
console.log(lengths); // Outputs: [5, 5, 6]

// filter: Creates new array with elements that pass test
let longNames = fruits.filter((item) => item.length > 5);
console.log(longNames); // Outputs: ['orange']

// find: Returns first element that satisfies condition
let found = fruits.find((item) => item.startsWith("m"));
console.log(found); // Outputs: 'mango'

// reduce: Reduces array to a single value
let nums = [1, 2, 3, 4];
let sum = nums.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Outputs: 10

// forEach: Executes function for each element, no return
nums.forEach((num) => console.log(num * 2)); // Outputs: 2, 4, 6, 8

// some: Returns true if at least one element passes test
let hasEven = nums.some((num) => num % 2 === 0);
console.log(hasEven); // Outputs: true

// every: Returns true if all elements pass test
let allPositive = nums.every((num) => num > 0);
console.log(allPositive); // Outputs: true
