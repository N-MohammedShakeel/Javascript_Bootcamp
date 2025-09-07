/*
    ==============================
    📌 LEXICAL (STATIC) SCOPE
    ==============================
    - Inner functions can access variables from their outer function.
    - Scope is determined by where the function is written (not where it is called).
*/

function outer() {
  let outerVar = "I am from outer";

  function inner() {
    console.log(outerVar); // ✅ Can access outer variable
  }

  return inner;
}

const innerFn = outer();
innerFn(); // "I am from outer"

// Example with nested levels
function levelOne() {
  let a = 10;
  function levelTwo() {
    let b = 20;
    function levelThree() {
      console.log(a, b); // ✅ Lexical scope allows access
    }
    levelThree();
  }
  levelTwo();
}
levelOne();
