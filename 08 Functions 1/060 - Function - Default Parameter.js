/*
    ==============================
    📌 DEFAULT PARAMETERS
    ==============================
    - Allows setting default value for parameters
*/

function greet(name = "Guest") {
  console.log("Hello", name);
}

greet("Alice"); // Hello Alice
greet(); // Hello Guest
