/*
    ==============================
    📌 ADDING & REMOVING ELEMENTS
    ==============================
*/

let animals = ["Dog", "Cat", "Elephant"];

// ✅ push() → Add at end
animals.push("Lion");
console.log(animals); // [ 'Dog', 'Cat', 'Elephant', 'Lion' ]

// ✅ pop() → Remove from end
animals.pop();
console.log(animals); // [ 'Dog', 'Cat', 'Elephant' ]

// ✅ unshift() → Add at start
animals.unshift("Tiger");
console.log(animals); // [ 'Tiger', 'Dog', 'Cat', 'Elephant' ]

// ✅ shift() → Remove from start
animals.shift();
console.log(animals); // [ 'Dog', 'Cat', 'Elephant' ]

// ✅ splice() → Add/Remove from specific index
animals.splice(1, 1, "Horse", "Cow");
// remove 1 element at index 1, add Horse & Cow
console.log(animals); // [ 'Dog', 'Horse', 'Cow', 'Elephant' ]
