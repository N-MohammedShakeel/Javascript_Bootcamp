/*
    ====================
    Number Methods
    ====================
*/

let myNum = 123.456;

console.log(myNum.toString()); // "123.456"
console.log(myNum.toFixed(2)); // "123.46" (round to 2 decimals)
console.log(myNum.toPrecision(4)); // "123.5" (total digits)
console.log(Number.isInteger(myNum)); // false
console.log(Number.isNaN(myNum)); // false
console.log(Number("100")); // 100 (convert string to number)
console.log(Number.parseFloat("10.5px")); // 10.5
console.log(Number.parseInt("10.5px")); // 10
