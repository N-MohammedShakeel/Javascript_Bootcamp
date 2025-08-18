// File: reference_types.js

// Reference Types: Objects, arrays, and functions are non-primitive, passed by reference
// Unlike primitives, changes to reference types affect all references to the same object

// Object example: Passed by reference
let obj1 = { name: "Alice" };
let obj2 = obj1; // obj2 references the same object
obj2.name = "Bob"; // Modifies the same object
console.log(obj1.name); // Outputs: Bob

// Array example: Also passed by reference
let arr1 = [1, 2, 3];
let arr2 = arr1; // arr2 references the same array
arr2.push(4); // Modifies the original array
console.log(arr1); // Outputs: [1, 2, 3, 4]

// Primitive vs Reference: Primitives are copied by value
let num1 = 10;
let num2 = num1; // num2 gets a copy of the value
num2 = 20; // Does not affect num1
console.log(num1); // Outputs: 10
