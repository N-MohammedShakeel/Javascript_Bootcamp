/*
    ===========================
    Type Coercion in JavaScript
    ===========================

    📌 What is Type Coercion?
    -------------------------
    - Type Coercion means converting a value from one type to another.
    - Happens in 2 ways:
        1. Implicit (automatic conversion by JS engine)
        2. Explicit (manual conversion by developer)

    =================================
    1️⃣ Implicit Type Coercion (Auto)
    =================================
    - JavaScript automatically converts types when needed.
    - Often happens with +, -, ==, and other operators.
*/

// -----------------------
// String + Number -> String (Concatenation)
console.log("5" + 2); // "52" (number converted to string)
console.log(2 + "5"); // "25"

// Number + Number -> Number (Addition)
console.log(2 + 5); // 7

// String - Number -> Number (String converted to number)
console.log("10" - 5); // 5

// String * Number -> Number
console.log("6" * 2); // 12

// Boolean -> Number (true = 1, false = 0)
console.log(true + 1); // 2
console.log(false + 5); // 5

// null -> 0, undefined -> NaN
console.log(null + 5); // 5
console.log(undefined + 5); // NaN

/*
    =================================
    2️⃣ Explicit Type Coercion (Manual)
    =================================
    - We manually convert values to required type using:
      Number(), String(), Boolean(), parseInt(), parseFloat()
*/

// String -> Number
console.log(Number("123")); // 123
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

// Number -> String
console.log(String(123)); // "123"
console.log((123).toString()); // "123"

// Value -> Boolean
console.log(Boolean(0)); // false
console.log(Boolean(1)); // true
console.log(Boolean("")); // false
console.log(Boolean("Hi")); // true

/*
    ==========================
    ⚠️ Loose vs Strict Equality
    ==========================
    - ==  (loose equality) -> allows type coercion
    - === (strict equality) -> checks type + value (NO coercion)
*/

console.log(5 == "5"); // true (because "5" is coerced to number)
console.log(5 === "5"); // false (different types, no coercion)
