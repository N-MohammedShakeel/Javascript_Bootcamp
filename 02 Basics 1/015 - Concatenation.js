/*
    ===============================
    String Concatenation in JS
    ===============================

    📌 What is Concatenation?
    -------------------------
    Concatenation = Joining two or more strings together into one string.

    There are two main ways to concatenate in JavaScript:

    1. Using + or += operator
    2. Using Template Literals (ES6+)

    ======================
    ✅ Examples
    ======================
*/

// -----------------------
// 1. Using + Operator
// -----------------------
let firstName = "John";
let lastName = "Doe";

let fullName = firstName + " " + lastName;
console.log("Using + :", fullName);

// += operator (append)
let message = "Hello";
message += ", " + fullName + "!";
console.log("Using += :", message);

// -----------------------
// 3. Concatenation with Numbers
// -----------------------
// ⚠️ If one operand is a string, JS converts the other to a string.
console.log("Number + String:", 5 + "5"); // "55" (string)
console.log("String + Number:", "Age: " + 30); // "Age: 30"

// If you want math, keep them as numbers
console.log("Number + Number:", 5 + 5); // 10 (number)
