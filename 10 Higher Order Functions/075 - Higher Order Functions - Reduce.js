/*
    ==============================
    📌 HOF: REDUCE()
    ==============================
    - reduce() reduces an array to a single value.
    - Takes a callback with (accumulator, currentValue).
    - Syntax:
        array.reduce((acc, current, index, array) => { ... }, initialValue)
*/

const numbers = [1, 2, 3, 4, 5];

// Example 1: Sum of numbers
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum:", sum); // 15

// Example 2: Find maximum
const max = numbers.reduce(
  (acc, curr) => (curr > acc ? curr : acc),
  numbers[0]
);
console.log("Max:", max); // 5

// Example 3: Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
console.log("Fruit Count:", count);
// { apple: 3, banana: 2, orange: 1 }
