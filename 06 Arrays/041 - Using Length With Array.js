/*
    ==============================
    📌 USING LENGTH WITH ARRAYS
    ==============================
*/

let colors = ["Red", "Green", "Blue", "Yellow"];
console.log(colors.length); // 4

// Access last element using length
console.log(colors[colors.length - 1]); // Yellow

// Add new element at end using length
colors[colors.length] = "Purple";
console.log(colors); // [ 'Red', 'Green', 'Blue', 'Yellow', 'Purple' ]

// Shrink array using length
colors.length = 3;
console.log(colors); // [ 'Red', 'Green', 'Blue' ]
