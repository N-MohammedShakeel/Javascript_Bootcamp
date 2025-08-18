// File: promises.js
// Promises: Objects representing eventual completion/failure of async operation
// States: Pending, Fulfilled, Rejected

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const success = true; // Simulating condition
    if (success) {
      resolve("Operation successful"); // Fulfilled
    } else {
      reject("Operation failed"); // Rejected
    }
  }, 1000);
});

// Using then/catch/finally
myPromise
  .then((result) => {
    console.log(result); // Outputs: Operation successful
  })
  .catch((error) => {
    console.error("Error:", error);
  })
  .finally(() => {
    console.log("Promise completed"); // Always runs
  });

// Chaining promises to avoid callback hell
function step1() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 1 complete");
      resolve("Step 1 data");
    }, 1000);
  });
}

function step2(data) {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Step 2 complete, received:", data);
      resolve("Step 2 data");
    }, 1000);
  });
}

step1()
  .then((data) => step2(data))
  .then((result) => console.log("All steps done:", result)) // Outputs: All steps done: Step 2 data
  .catch((error) => console.error("Error:", error));
