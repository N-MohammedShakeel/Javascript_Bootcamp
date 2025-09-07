/*
    ==============================
    📌 HOF: FILTER()
    ==============================
    - filter() creates a NEW array containing elements that pass a condition.
    - Does NOT modify the original array.
    - Syntax:
        array.filter((element, index, array) => condition)
*/

const numbers = [10, 20, 30, 40, 50];

// Example 1: Get numbers greater than 25
const filtered = numbers.filter((num) => num > 25);
console.log("Filtered > 25:", filtered); // [30, 40, 50]

// Example 2: Filter odd numbers
const oddNumbers = [1, 2, 3, 4, 5, 6].filter((n) => n % 2 !== 0);
console.log("Odd Numbers:", oddNumbers); // [1, 3, 5]
