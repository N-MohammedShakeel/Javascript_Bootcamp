/*
    ==============================
    📌 LOOPING ON SEQUENCES
    ==============================
    - We can use loops to go through arrays, strings, etc.
*/

let fruits = ["Apple", "Banana", "Mango"];

// ✅ Using for loop on array
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// ✅ Using for loop on string
let word = "Hello";
for (let i = 0; i < word.length; i++) {
  console.log(word[i]);
}
