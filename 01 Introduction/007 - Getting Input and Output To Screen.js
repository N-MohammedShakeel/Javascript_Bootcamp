/*
    ============================================
    Input & Output in JavaScript (Clean Example)
    ============================================

    OUTPUT METHODS:
    ---------------
    1. window.alert(message)
       - Shows a pop-up message.
       - Pauses script execution until the user clicks "OK".

    2. document.write(content)
       - Writes HTML/text directly into the page.
       - Replaces entire page content if used after page loads.

    3. console.log(message)
       - Logs information in the browser console (F12).
       - Mostly used for debugging.

    INPUT METHODS:
    --------------
    1. window.prompt(message, defaultValue)
       - Shows a pop-up with a text field.
       - Returns the text entered by the user.
       - Returns null if the user clicks "Cancel".

    2. window.confirm(message)
       - Shows a pop-up with "OK" and "Cancel".
       - Returns true if "OK" is clicked, false otherwise.
*/

/* -------------------
   OUTPUT EXAMPLES
------------------- */

// 1. Output using alert
window.alert("👋 Welcome to the JavaScript Demo!");

// 2. Output using document.write
document.write(
  "<h2 style='color: green;'>Hello, this is written using document.write()</h2>"
);

// 3. Output using console.log
console.log("✅ Page loaded successfully");
console.log("Debug Info: Current time is", new Date());

/* -------------------
   INPUT EXAMPLES
------------------- */

// 1. Getting input using prompt
let userName = window.prompt("What is your name?", "Guest"); // Default value is "Guest"
if (userName) {
  document.write(`<p>Hello <b>${userName}</b> 👋, nice to meet you!</p>`);
  console.log("User entered name:", userName);
} else {
  document.write("<p>You did not enter a name.</p>");
}

// 2. Getting confirmation using confirm
let isSure = window.confirm("Do you want to continue?");
if (isSure) {
  document.write("<p>You chose to continue ✅</p>");
  console.log("User clicked OK on confirm box");
} else {
  document.write("<p>You cancelled the action ❌</p>");
  console.log("User clicked Cancel on confirm box");
}
