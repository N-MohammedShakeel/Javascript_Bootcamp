// File: sync_async.js
// Synchronous vs Asynchronous Programming

// Synchronous: Code executes sequentially, blocking until each operation completes
function syncOperation() {
  console.log("Starting sync operation");
  let result = 0;
  for (let i = 0; i < 1000000; i++) {
    result += i; // CPU-intensive task
  }
  console.log("Sync operation done, result:", result);
  return result;
}
console.log("Before sync");
syncOperation();
console.log("After sync"); // Waits for syncOperation to complete

// Asynchronous: Code executes without blocking, using callbacks, promises, or async/await
// Example: setTimeout for async delay
console.log("Before async");
setTimeout(() => {
  console.log("Async operation done after 2 seconds");
}, 2000);
console.log("After async"); // Executes immediately, doesn't wait
