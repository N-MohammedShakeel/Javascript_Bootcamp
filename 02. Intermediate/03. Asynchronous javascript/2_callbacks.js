// File: callbacks.js
// Callbacks: Functions passed as arguments to be executed later

// Basic callback example
function fetchData(callback) {
  setTimeout(() => {
    const data = "Data received";
    callback(data); // Execute callback with data
  }, 1000);
}

fetchData((data) => {
  console.log(data); // Outputs: Data received (after 1 second)
});

// Callback Hell: Nested callbacks leading to unreadable code
function processSteps() {
  setTimeout(() => {
    console.log("Step 1 complete");
    setTimeout(() => {
      console.log("Step 2 complete");
      setTimeout(() => {
        console.log("Step 3 complete");
        // More nested callbacks would make this worse
      }, 1000);
    }, 1000);
  }, 1000);
}
processSteps(); // Nested timeouts create "callback hell"

// Issue: Hard to read, maintain, and handle errors in callback hell
