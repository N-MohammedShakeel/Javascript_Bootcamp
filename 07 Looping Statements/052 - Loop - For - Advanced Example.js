/*
    ==============================
    📌 ADVANCED FOR LOOPS
    ==============================
    - for...of → iterate over values (arrays, strings)
    - for...in → iterate over keys/indexes (objects, arrays)
*/

let colors = ["Red", "Green", "Blue"];

// ✅ for...of (best for arrays)
for (let color of colors) {
  console.log("Color:", color);
}

// ✅ for...in (best for objects)
let person = { name: "Alice", age: 25, city: "Delhi" };
for (let key in person) {
  console.log(key, ":", person[key]);
}

// ⚠️ for...in can be used for arrays but gives indexes
for (let index in colors) {
  console.log(index, colors[index]);
}
