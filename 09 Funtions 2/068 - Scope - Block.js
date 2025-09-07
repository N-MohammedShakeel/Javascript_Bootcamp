/*
    ==============================
    📌 BLOCK SCOPE
    ==============================
    - Variables declared with let & const are block scoped.
    - Variables declared with var are NOT block scoped (function-scoped).
*/

if (true) {
  var x = 10; // function-scoped
  let y = 20; // block-scoped
  const z = 30; // block-scoped
  console.log("Inside block:", x, y, z);
}

console.log("Outside block: x =", x); // ✅ Works
// console.log(y); // ❌ ReferenceError
// console.log(z); // ❌ ReferenceError
