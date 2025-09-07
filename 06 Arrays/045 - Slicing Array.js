/*
    ==============================
    📌 SLICING ARRAYS
    ==============================
    slice(start, end) → returns a new array (does NOT modify original)
*/

let fruits = ["Apple", "Banana", "Mango", "Orange", "Kiwi"];

console.log(fruits.slice(1, 4)); // [ 'Banana', 'Mango', 'Orange' ]
console.log(fruits.slice(2)); // [ 'Mango', 'Orange', 'Kiwi' ]
console.log(fruits.slice(-2)); // [ 'Orange', 'Kiwi' ]
console.log(fruits); // Original array remains unchanged
