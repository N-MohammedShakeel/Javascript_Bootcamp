/*
    ==============================
    📌 HANDLING RANDOM ARGUMENTS
    ==============================
    - "arguments" object is available in normal functions (not in arrow functions)
    - It contains all arguments passed to a function
*/

function showArgs() {
  console.log("Number of arguments:", arguments.length);
  console.log("Arguments:", arguments);
}

showArgs("A", 10, true, [1, 2, 3]);

// Example: sum using arguments
function sum() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

console.log(sum(2, 3, 4)); // 9
