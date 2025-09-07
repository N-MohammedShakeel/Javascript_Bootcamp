/*
    ====================
    String Methods - Part 1 (Basic)
    ====================
*/

let str = "Hello JavaScript";

console.log(str.length); // 16
console.log(str.charAt(0)); // "H"
console.log(str.charCodeAt(0)); // 72 (Unicode)
console.log(str.at(-1)); // "t" (last character)
console.log(str.toUpperCase()); // "HELLO JAVASCRIPT"
console.log(str.toLowerCase()); // "hello javascript"
console.log(str.trim()); // removes spaces (start & end)
console.log(str.trimStart()); // removes spaces from start
console.log(str.trimEnd()); // removes spaces from end
