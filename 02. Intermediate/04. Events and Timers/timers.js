// File: timers.js
// Timers: setTimeout and setInterval for scheduling tasks

// setTimeout: Executes a function once after a specified delay (in milliseconds)
function delayedGreeting() {
  console.log("Hello after 2 seconds!");
}
setTimeout(delayedGreeting, 2000); // Runs once after 2000ms (2 seconds)

// setTimeout with anonymous function and parameters
setTimeout(
  (name) => {
    console.log(`Hello, ${name}!`);
  },
  1000,
  "Alice"
); // Outputs: Hello, Alice! after 1 second

// Clearing setTimeout: Prevents execution if not yet run
const timeoutId = setTimeout(() => {
  console.log("This will not run");
}, 3000);
clearTimeout(timeoutId); // Cancels the timeout

// setInterval: Repeatedly executes a function at specified intervals
let count = 0;
const intervalId = setInterval(() => {
  console.log(`Tick ${++count}`);
  if (count === 3) {
    clearInterval(intervalId); // Stops after 3 ticks
    console.log("Interval stopped");
  }
}, 1000); // Runs every 1 second

// Practical example: Countdown timer
function startCountdown(seconds) {
  let timeLeft = seconds;
  const countdown = setInterval(() => {
    console.log(`${timeLeft} seconds remaining`);
    timeLeft--;
    if (timeLeft < 0) {
      clearInterval(countdown);
      console.log("Countdown finished!");
    }
  }, 1000);
}
startCountdown(3); // Outputs: 3, 2, 1, 0, Countdown finished!
