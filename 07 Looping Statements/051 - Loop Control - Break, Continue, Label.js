/*
    ==============================
    📌 LOOP CONTROL STATEMENTS
    ==============================
    break   → exit loop immediately
    continue→ skip current iteration
*/

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Breaking at i =", i);
    break; // exit loop completely
  }
  console.log(i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    console.log("Skipping i =", i);
    continue; // skip current iteration, move to next
  }
  console.log(i);
}
