/*
    ==============================
    📌 HOF: forEach()
    ==============================
    - forEach() executes a function for each array element.
    - Does NOT create a new array (unlike map).
    - Mainly used for side-effects (printing, updating DOM).
    - Syntax:
        array.forEach((element, index, array) => { ... })
*/

const colors = ["red", "green", "blue"];

console.log("Colors:");
colors.forEach((color, index) => {
  console.log(`${index + 1}: ${color}`);
});

// Example 2: Mutating original array
let numbers = [1, 2, 3];
numbers.forEach((value, index, arr) => {
  arr[index] = value * 10;
});
console.log("Modified Numbers:", numbers); // [10, 20, 30]
