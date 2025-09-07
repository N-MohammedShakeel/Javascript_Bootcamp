/*
    ==============================
    📌 GLOBAL vs LOCAL SCOPE
    ==============================
    - Global: Defined outside all functions → accessible everywhere.
    - Local: Defined inside a function → accessible only within that function.
*/

let globalVar = "I am global";

function testScope() {
  let localVar = "I am local";
  console.log(globalVar); // ✅ Accessible
  console.log(localVar); // ✅ Accessible
}

testScope();

// console.log(localVar); ❌ ReferenceError: localVar is not defined
console.log(globalVar); // ✅ Still accessible
