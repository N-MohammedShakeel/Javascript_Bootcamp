/*
    ================================
    JavaScript Console Methods
    ================================

    console.log(message)
        - Prints normal messages to console (standard output).

    console.info(message)
        - Prints informational messages.
        - Same as log, but semantically used for info.

    console.warn(message)
        - Prints a warning message (yellow highlight in console).

    console.error(message)
        - Prints an error message (red highlight in console).

    console.table(data)
        - Displays arrays or objects in a tabular format.

    console.group(label) / console.groupEnd()
        - Groups multiple logs under a collapsible section.

    console.time(label) / console.timeEnd(label)
        - Measures the time taken between the two calls.

    console.clear()
        - Clears the console output.
*/

/* -------------------
   EXAMPLES
------------------- */

// Normal log
console.log("✅ This is a normal log message.");

// Info log
console.info("ℹ️ This is an informational message.");

// Warning message
console.warn("⚠️ This is a warning. Be careful!");

// Error message
console.error("❌ This is an error message.");

// Displaying data as table
const users = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 28 },
  { name: "Charlie", age: 25 },
];
console.table(users);

// Grouping logs
console.group("User Details");
console.log("Name: Alice");
console.log("Age: 22");
console.groupEnd();

// Measuring time
console.time("LoopTime");
for (let i = 0; i < 100000; i++) {} // dummy loop
console.timeEnd("LoopTime"); // shows time taken for loop

// Clear console
// (Uncomment the next line if you want to clear console output)
// console.clear();
