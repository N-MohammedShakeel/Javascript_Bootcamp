/*
    ==============================
    📌 NESTED LOOPS
    ==============================
    - Loop inside another loop
*/

for (let i = 1; i <= 3; i++) {
  console.log("Outer Loop i =", i);
  for (let j = 1; j <= 2; j++) {
    console.log("   Inner Loop j =", j);
  }
}

// Example: Multiplication table (2 to 3)
for (let i = 2; i <= 3; i++) {
  console.log(`Table of ${i}:`);
  for (let j = 1; j <= 5; j++) {
    console.log(`${i} x ${j} = ${i * j}`);
  }
}
