/*
    ==============================
    📌 HOF: MAP()
    ==============================
    - map() creates a NEW array by applying a function to each element.
    - Does NOT modify the original array.
    - Syntax:
        array.map((element, index, array) => { ... })
*/

const numbers = [1, 2, 3, 4, 5];

// Example 1: Double each number
const doubled = numbers.map((num) => num * 2);
console.log("Original:", numbers); // [1, 2, 3, 4, 5]
console.log("Doubled:", doubled); // [2, 4, 6, 8, 10]

// Example 2: Return objects
const users = ["Alice", "Bob", "Charlie"];
const userObjects = users.map((name, index) => ({
  id: index + 1,
  username: name,
}));
console.log(userObjects);
/*
[
  { id: 1, username: 'Alice' },
  { id: 2, username: 'Bob' },
  { id: 3, username: 'Charlie' }
]
*/
