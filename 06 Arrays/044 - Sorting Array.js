/*
    ==============================
    📌 SORTING ARRAYS
    ==============================
*/

let letters = ["d", "a", "c", "b"];
console.log(letters.sort()); // [ 'a', 'b', 'c', 'd' ]

let nums = [10, 5, 40, 2];
console.log(nums.sort()); // [ 10, 2, 40, 5 ] (string sort!)
console.log(nums.sort((a, b) => a - b)); // [ 2, 5, 10, 40 ] (numeric sort)

// ✅ reverse()
console.log(nums.reverse()); // [ 40, 10, 5, 2 ]
