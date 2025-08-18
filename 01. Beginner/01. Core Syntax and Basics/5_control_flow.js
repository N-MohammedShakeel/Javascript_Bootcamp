// File: control_flow.js

// Control Flow:

// if/else: Conditional execution
let num = 10;
if (num > 0) {
  console.log("Positive");
} else if (num < 0) {
  console.log("Negative");
} else {
  console.log("Zero");
}

// switch: Multi-way branching based on value
let day = 3;
switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  default:
    console.log("Other day");
}

// Loops:

// for: General loop with initialization, condition, increment
for (let i = 0; i < 5; i++) {
  console.log(i); // Outputs 0 to 4
}

// while: Loop while condition is true
let count = 0;
while (count < 3) {
  console.log(count);
  count++;
}

// do-while: Executes at least once, then checks condition
let j = 0;
do {
  console.log(j);
  j++;
} while (j < 3);

// for-in: Iterates over object properties (keys)
let person = { name: "Alice", age: 25 };
for (let key in person) {
  console.log(key + ": " + person[key]);
}

// for-of: Iterates over iterable values (like arrays)
let colors = ["red", "green", "blue"];
for (let color of colors) {
  console.log(color);
}
