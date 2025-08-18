// File: async_await_fetch.js
// Async/Await: Syntactic sugar over promises for cleaner async code

// Basic async/await
async function fetchData() {
  try {
    // Simulate async operation
    const data = await new Promise((resolve) => {
      setTimeout(() => resolve("Data fetched"), 1000);
    });
    console.log(data); // Outputs: Data fetched
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
fetchData();

// Fetch API: Making HTTP requests
async function getUser() {
  try {
    // Fetch data from a public API (e.g., JSONPlaceholder)
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const user = await response.json(); // Parse JSON response
    console.log("User:", user.name); // Outputs: User: Leanne Graham
    return user;
  } catch (error) {
    console.error("Fetch error:", error.message);
  }
}
getUser();

// Combining multiple async operations
async function processUsers() {
  try {
    const [user1, user2] = await Promise.all([
      fetch("https://jsonplaceholder.typicode.com/users/1").then((res) =>
        res.json()
      ),
      fetch("https://jsonplaceholder.typicode.com/users/2").then((res) =>
        res.json()
      ),
    ]);
    console.log("Users:", user1.name, user2.name); // Outputs: Users: Leanne Graham Ervin Howell
  } catch (error) {
    console.error("Error fetching users:", error.message);
  }
}
processUsers();
