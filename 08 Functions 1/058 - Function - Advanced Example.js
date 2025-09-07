/*
    ==============================
    📌 ADVANCED FUNCTIONS
    ==============================
    - Function Declaration
    - Function Expression
    - Arrow Functions
    - IIFE (Immediately Invoked Function Expression)
*/

// ✅ Function Declaration (hoisted)
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // 7

// ✅ Function Expression (not hoisted)
const multiply = function (x, y) {
  return x * y;
};
console.log(multiply(5, 6)); // 30

// ✅ Arrow Function (short syntax)
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5

// ✅ IIFE (Runs immediately)
(function () {
  console.log("IIFE runs immediately!");
})();

// ✅ Anonymous Function (used with setTimeout, event listeners)
setTimeout(function () {
  console.log("Anonymous function executed after 1 second");
}, 1000);
