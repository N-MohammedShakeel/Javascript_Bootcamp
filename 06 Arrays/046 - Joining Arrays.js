/*
    ==============================
    📌 JOINING & COMBINING ARRAYS
    ==============================
*/

let cities = ["Delhi", "Mumbai", "Chennai"];

// ✅ join() → convert to string
console.log(cities.join()); // "Delhi,Mumbai,Chennai"
console.log(cities.join(" | ")); // "Delhi | Mumbai | Chennai"

// ✅ concat() → merge arrays
let moreCities = ["Pune", "Goa"];
let combined = cities.concat(moreCities);
console.log(combined); // [ 'Delhi', 'Mumbai', 'Chennai', 'Pune', 'Goa' ]

// ✅ spread (...) → modern way to merge
let merged = [...cities, ...moreCities];
console.log(merged); // [ 'Delhi', 'Mumbai', 'Chennai', 'Pune', 'Goa' ]
