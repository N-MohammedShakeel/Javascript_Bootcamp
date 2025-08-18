// File: maps_sets_symbols.js

// Map: Key-value pairs, any type for keys
let map = new Map();

// set: Add key-value pair
map.set("name", "Alice");
map.set(1, "number one");
map.set({ id: 1 }, "object key");
console.log(map); // Outputs: Map(3) { 'name' => 'Alice', 1 => 'number one', { id: 1 } => 'object key' }

// get: Retrieve value by key
console.log(map.get("name")); // Outputs: Alice

// has: Check if key exists
console.log(map.has(1)); // Outputs: true

// delete: Remove key-value pair
map.delete("name");
console.log(map.has("name")); // Outputs: false

// Set: Collection of unique values
let set = new Set();

// add: Add value
set.add(1);
set.add("hello");
set.add(1); // Duplicate ignored
console.log(set); // Outputs: Set(2) { 1, 'hello' }

// has: Check if value exists
console.log(set.has("hello")); // Outputs: true

// delete: Remove value
set.delete(1);
console.log(set); // Outputs: Set(1) { 'hello' }

// Symbols: Unique identifiers, often used as object keys
const sym1 = Symbol("id");
const sym2 = Symbol("id"); // Different from sym1 despite same description

let obj = {
  [sym1]: "unique value",
};
console.log(obj[sym1]); // Outputs: unique value
console.log(obj[sym2]); // Outputs: undefined (sym2 is a different symbol)

// Symbols prevent property name collisions
let obj2 = {
  [Symbol("key")]: "value1",
  [Symbol("key")]: "value2", // Creates a different key
};
console.log(Object.getOwnPropertySymbols(obj2).length); // Outputs: 2
