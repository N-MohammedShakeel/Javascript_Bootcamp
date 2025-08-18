// File: scope.js

// Scope: Determines the accessibility of variables

// Global Scope: Variables declared outside functions, accessible everywhere
let globalVar = "I am global";

function checkGlobal() {
  console.log(globalVar); // Accessible inside function
}
checkGlobal(); // Outputs: I am global
console.log(globalVar); // Outputs: I am global

// Local Scope: Variables declared inside a function or block, accessible only there

// Function Scope (with var): var is function-scoped
function functionScope() {
  var localVar = "I am local to the function";
  console.log(localVar); // Accessible inside
}
functionScope(); // Outputs: I am local to the function
// console.log(localVar); // Error: localVar is not defined

// Block Scope (with let/const): Limited to the block {}
if (true) {
  let blockVar = "I am local to this block";
  console.log(blockVar); // Outputs: I am local to this block
}
// console.log(blockVar); // Error: blockVar is not defined

/*
Scope Chain: Inner scopes can access outer scopes, but not vice versa.
This is lexical scoping.
*/
let outer = "Outer";

function outerFunction() {
  let inner = "Inner";

  function innerFunction() {
    console.log(outer); // Accessible (from outer scope)
    console.log(inner); // Accessible (from enclosing function)
  }

  innerFunction();
}

outerFunction();
// console.log(inner); // Error: Not accessible globally
