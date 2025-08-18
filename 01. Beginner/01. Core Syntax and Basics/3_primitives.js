// File: primitives.js

// String: Sequence of characters, enclosed in single or double quotes
let str = "Hello, World!"; // Example string

// Number: Numeric value, can be integer or floating-point
let num = 42; // Integer
let floatNum = 3.14; // Floating-point

// Boolean: Logical value, true or false
let isTrue = true;
let isFalse = false;

// Null: Intentional absence of any object value
let emptyValue = null;

// Undefined: Variable declared but not assigned a value
let notDefined; // This is undefined

// BigInt: For integers larger than Number can safely represent
let bigNum = 1234567890123456789012345n; // Note the 'n' suffix

// Symbol: Unique and immutable primitive, often used as unique identifiers
// Symbols are created with Symbol() and can have an optional description
const uniqueId1 = Symbol("description"); // Unique symbol with description
const uniqueId2 = Symbol("description"); // Another unique symbol, even with same description

// Symbols are unique, so uniqueId1 !== uniqueId2
// Useful for object properties to avoid name clashes
let obj = {};
obj[uniqueId1] = "Value for symbol 1";
obj[uniqueId2] = "Value for symbol 2";

// Accessing symbol properties
console.log(obj[uniqueId1]); // Outputs: Value for symbol 1
