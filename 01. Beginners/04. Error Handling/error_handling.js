// File: error_handling.js

// Error Handling: Using try/catch to manage runtime errors
// try: Contains code that might throw an error
// catch: Handles the error if one occurs
// finally: (Optional) Executes regardless of error or success

// Basic try/catch example
try {
  // Attempting to use an undefined variable
  console.log(undefinedVariable); // This will throw a ReferenceError
} catch (error) {
  // Catch block handles the error
  console.error("Caught an error:", error.message); // Outputs: Caught an error: undefinedVariable is not defined
}

// Using try/catch with a custom error
try {
  let value = null;
  if (!value) {
    // Throwing a custom error
    throw new Error("Value is null!");
  }
  console.log(value);
} catch (error) {
  console.error("Custom error:", error.message); // Outputs: Custom error: Value is null!
}

// Finally block: Runs regardless of try/catch outcome
try {
  let num = "123";
  // Converting string to number
  let result = Number(num);
  if (isNaN(result)) {
    throw new Error("Invalid number");
  }
  console.log("Number is:", result);
} catch (error) {
  console.error("Error occurred:", error.message);
} finally {
  console.log("This runs no matter what."); // Always executes
}

// Handling specific error types
try {
  let jsonString = '{ "name": "Alice"'; // Invalid JSON (missing closing brace)
  JSON.parse(jsonString); // Throws SyntaxError
} catch (error) {
  if (error instanceof SyntaxError) {
    console.error("JSON parsing failed:", error.message); // Outputs: JSON parsing failed: Unexpected end of JSON input
  } else {
    console.error("Other error:", error.message);
  }
}

// Example: Practical use case with array access
try {
  let arr = [1, 2, 3];
  console.log(arr[10]); // Accessing out-of-bounds index (undefined)
  if (!arr[10]) {
    throw new Error("Index out of bounds");
  }
} catch (error) {
  console.error("Array error:", error.message); // Outputs: Array error: Index out of bounds
} finally {
  console.log("Array operation complete.");
}
