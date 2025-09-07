/*
    ==============================
    📌 ANONYMOUS FUNCTIONS
    ==============================
    - Functions without a name.
    - Usually assigned to variables or passed as arguments.
*/

// 1. Assigning anonymous function to a variable
const greet = function (name) {
  console.log("Hello", name);
};
greet("Alice");

// 2. Passing anonymous function as a callback
setTimeout(function () {
  console.log("This message is shown after 2 seconds");
}, 2000);

// 3. Using with array methods
const numbers = [1, 2, 3];
const doubled = numbers.map(function (num) {
  return num * 2;
});
console.log(doubled); // [2, 4, 6]
