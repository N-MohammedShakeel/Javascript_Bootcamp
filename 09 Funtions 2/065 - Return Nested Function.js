/*
    ==============================
    📌 RETURNING NESTED FUNCTIONS
    ==============================
    - Functions can return other functions.
    - This is the foundation of closures.
*/

function outerFunction(outerValue) {
  return function innerFunction(innerValue) {
    console.log(`Outer: ${outerValue}, Inner: ${innerValue}`);
  };
}

const greetOuter = outerFunction("Hello");
greetOuter("World"); // Outer: Hello, Inner: World

// Example: create a multiplier function
function createMultiplier(multiplier) {
  return function (value) {
    return value * multiplier;
  };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15
