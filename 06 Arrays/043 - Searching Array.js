/*
    ==============================
    📌 SEARCHING IN ARRAYS
    ==============================
*/

let numbers = [10, 20, 30, 40, 50, 60];

// ✅ indexOf()
console.log(numbers.indexOf(30)); // 2
console.log(numbers.indexOf(100)); // -1 (not found)

// ✅ includes()
console.log(numbers.includes(50)); // true
console.log(numbers.includes(90)); // false

// ✅ find()
let found = numbers.find((num) => num > 30);
console.log(found); // 40 (first match)

// ✅ findIndex()
let idx = numbers.findIndex((num) => num > 30);
console.log(idx); // 3
