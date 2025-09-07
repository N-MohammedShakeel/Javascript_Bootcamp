/*
    ==============================
    Nested if (if inside if)
    ==============================
*/

let score = 85;

if (score >= 50) {
  console.log("You passed!");
  if (score >= 90) {
    console.log("Excellent! Grade A+");
  } else if (score >= 75) {
    console.log("Good job! Grade B");
  } else {
    console.log("Keep improving! Grade C");
  }
} else {
  console.log("You failed ❌");
}
