/*
    ==============================
    📌 DO WHILE LOOP
    ==============================
    - Executes at least once, even if condition is false
    Syntax:
    do {
        // code
    } while (condition);
*/

let j = 1;
do {
  console.log("j =", j);
  j++;
} while (j <= 5);

// Example where condition fails but still runs once
let count = 10;
do {
  console.log("This runs once even though count > 5");
} while (count < 5);
