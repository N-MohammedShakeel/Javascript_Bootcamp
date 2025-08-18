// File: date_object.js

// Date Object: Represents a single moment in time
// Creating dates:

// Current date and time
let now = new Date();
console.log(now); // Outputs: Current date and time (e.g., 2025-08-18T11:31:00.000Z)

// Specific date: new Date(year, monthIndex, day, hours, minutes, seconds, milliseconds)
// Note: monthIndex is 0-based (0 = January, 11 = December)
let birthday = new Date(1995, 5, 15); // June 15, 1995
console.log(birthday); // Outputs: 1995-06-15T00:00:00.000Z

// Date from string
let dateFromString = new Date("2025-08-18");
console.log(dateFromString); // Outputs: 2025-08-18T00:00:00.000Z

// getTime: Returns milliseconds since January 1, 1970 (Unix epoch)
let timestamp = now.getTime();
console.log(timestamp); // Outputs: Milliseconds (e.g., 1747673460000)

// toLocaleString: Formats date for locale
// Default locale
console.log(now.toLocaleString()); // Outputs: e.g., 8/18/2025, 5:31:00 PM

// Custom locale and options
let options = {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "2-digit",
  minute: "2-digit",
};
console.log(now.toLocaleString("en-US", options)); // Outputs: e.g., August 18, 2025, 05:31 PM

// Specific time zone
console.log(
  now.to.slideshow.toLocaleString("en-US", { timeZone: "America/New_York" })
); // Outputs: e.g., 8/18/2025, 5:31:00 PM EDT
