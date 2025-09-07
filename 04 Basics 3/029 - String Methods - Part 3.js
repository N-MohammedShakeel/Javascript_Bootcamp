/*
    ====================
    String Methods - Part 3 (Modify & Split)
    ====================
*/

let str = "Hello JavaScript";

console.log(str.slice(0, 5)); // "Hello" (extract part)
console.log(str.substring(6)); // "JavaScript" (from index 6)
console.log(str.substr(6, 4)); // "Java" (start at 6, take 4 chars)
console.log(str.replace("Java", "Type")); // "Hello TypeScript"
console.log(str.replaceAll("a", "@")); // "Hello J@v@Script"
console.log(str.split(" ")); // ["Hello", "JavaScript"]
console.log(str.concat(" ❤️")); // "Hello JavaScript ❤️"
console.log("Repeat: ", str.repeat(2)); // repeats string twice
