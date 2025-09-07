/*
    ==============================
    📌 REST PARAMETERS
    ==============================
    - Collect multiple arguments into an array
    - Syntax: ...parameterName
*/

function sumAll(...nums) {
  let total = 0;
  for (let n of nums) {
    total += n;
  }
  return total;
}

console.log(sumAll(1, 2, 3, 4)); // 10
console.log(sumAll(5, 10)); // 15
