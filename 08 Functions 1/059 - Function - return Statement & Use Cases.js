/*
    ==============================
    📌 RETURN STATEMENT
    ==============================
    - Used to send value back from a function
*/

function square(num) {
  return num * num;
}

let result = square(5);
console.log(result); // 25

// Function returning multiple values using array/object
function calculate(a, b) {
  return { sum: a + b, product: a * b };
}

let { sum, product } = calculate(3, 4);
console.log(sum, product); // 7 12
