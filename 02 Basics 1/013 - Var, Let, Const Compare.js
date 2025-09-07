/*
    ===========================
    var vs let vs const (JS)
    ===========================

    📌 var
    ------
    - Function-scoped (available inside the whole function where it's declared).
    - Can be re-declared & updated.
    - Gets hoisted (moved to top of scope) and initialized with undefined.
    - Can create unexpected bugs because it ignores block scope (like if/for).

    📌 let
    ------
    - Block-scoped (only works inside { ... } where it is declared).
    - Can be updated but NOT re-declared in the same scope.
    - Also hoisted but not initialized (so accessing before declaration gives ReferenceError).

    📌 const
    -------
    - Block-scoped (like let).
    - Must be initialized at declaration.
    - Cannot be re-assigned (but if it’s an object or array, its contents CAN change).
    - Safer for values you don't want accidentally changed.

    ======================
    ✅ Examples
    ======================
*/

// -----------------------
// var Example
// -----------------------
function varExample() {
  console.log(x); // undefined (because var is hoisted)
  var x = 10;
  console.log("var x =", x);

  if (true) {
    var x = 20; // same variable (no block scope)
    console.log("Inside block, var x =", x);
  }

  console.log("Outside block, var x =", x); // Still 20
}
varExample();

// -----------------------
// let Example
// -----------------------
function letExample() {
  // console.log(y); // ❌ ReferenceError (not initialized yet)
  let y = 10;
  console.log("let y =", y);

  if (true) {
    let y = 20; // different variable (block-scoped)
    console.log("Inside block, let y =", y);
  }

  console.log("Outside block, let y =", y); // Still 10
}
letExample();

// -----------------------
// const Example
// -----------------------
function constExample() {
  const PI = 3.14159;
  console.log("const PI =", PI);

  // PI = 3.15; // ❌ TypeError: Assignment to constant variable

  const arr = [1, 2, 3];
  arr.push(4); // ✅ allowed (modifying contents)
  console.log("const array after push:", arr);

  // arr = [5, 6, 7]; // ❌ TypeError: cannot reassign entire array
}
constExample();
