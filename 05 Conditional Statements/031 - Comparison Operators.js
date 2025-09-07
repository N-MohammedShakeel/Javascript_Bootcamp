/*
    ==============================
    Comparison Operators in JS
    ==============================
    >   Greater than
    <   Less than
    >=  Greater than or equal
    <=  Less than or equal
    ==  Equal (loose, allows type coercion)
    === Strict equal (value + type must match)
    !=  Not equal (loose)
    !== Strict not equal (value + type must match)
*/

console.log(5 > 3); // true
console.log(5 < 3); // false
console.log(5 == "5"); // true  (type coercion)
console.log(5 === "5"); // false (strict compare)
console.log(5 != "5"); // false
console.log(5 !== "5"); // true
