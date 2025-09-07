/*
    ==============================
    📌 Introduction to Arrays
    ==============================
    - Arrays store multiple values in a single variable.
    - They are ordered, indexed (0-based), and dynamic in size.
*/

/*
    ==============================
    1️⃣ Creating Arrays (Two Methods)
    ==============================
*/

// ✅ Method 1: Using square brackets [] (Most Common)
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits);  // [ 'Apple', 'Banana', 'Mango' ]

// ✅ Method 2: Using new Array()
let numbers = new Array(10, 20, 30, 40);
console.log(numbers); // [ 10, 20, 30, 40 ]

// ⚠️ If you pass ONLY 1 number → it creates an empty array of that length
let emptyArray = new Array(3);
console.log(emptyArray); // [ <3 empty items> ]


/*
    ==============================
    2️⃣ Accessing Array Elements
    ==============================
    - Use index numbers (0-based)
*/

console.log(fruits[0]); // Apple
console.log(fruits[2]); // Mango

// Access last element
console.log(fruits[fruits.length - 1]); // Mango


/*
    ==============================
    3️⃣ Nested Arrays (Arrays inside Arrays)
    ==============================
*/

let nested = ["A", ["B", "C"], "D"];
console.log(nested[1]);    // [ 'B', 'C' ]
console.log(nested[1][0]); // B


/*
    ==============================
    4️⃣ Change Array Elements
    ==============================
    - Arrays are mutable → we can reassign values at any index
*/

fruits[1] = "Kiwi";
console.log(fruits); // [ 'Apple', 'Kiwi', 'Mango' ]

// Add new element by index
fruits[3] = "Orange";
console.log(fruits); // [ 'Apple', 'Kiwi', 'Mango', 'Orange' ]


/*
    ==============================
    5️⃣ Check if Variable is Array
    ==============================
*/

console.log(Array.isArray(fruits));     // true
console.log(Array.isArray("Not Array"));// false


/*
    ==============================
    🔥 Quick Recap:
    - Create arrays using [] or new Array()
    - Access elements using index
    - Nested arrays → array inside array
    - Arrays are mutable (we can change elements)
    - Use Array.isArray() to check if value is array
*/
