/*
------------------------------------------------------
📌 What is an API?
------------------------------------------------------
- API stands for "Application Programming Interface".
- It is a set of rules and protocols that allow two
  software applications to communicate with each other.

- In simple terms:
    API = A waiter in a restaurant 🍽️
    → You (the client) ask the waiter for food (request).
    → The waiter takes the order to the kitchen (server).
    → The kitchen prepares the food and gives it back (response).
    → The waiter delivers it to you.

------------------------------------------------------
📌 Types of APIs
------------------------------------------------------
1. Web APIs (most common in JavaScript):
   - Allow browsers or apps to interact with servers.
   - Example: Fetching data from GitHub, Twitter, or Weather APIs.

2. Library APIs:
   - Functions provided by programming libraries or frameworks.
   - Example: Math API in JavaScript → Math.random(), Math.sqrt()

3. OS APIs:
   - Interfaces to interact with the operating system.
   - Example: Windows API, Android API

------------------------------------------------------
📌 API in JavaScript (Web Context)
------------------------------------------------------
- APIs let us fetch or send data over the internet.
- Data is often exchanged in JSON format.
- Example using Fetch API:

    fetch("https://api.github.com/users/octocat")
      .then(res => res.json())
      .then(data => console.log(data));

------------------------------------------------------
📌 Summary
------------------------------------------------------
- API = A bridge between two systems.
- Helps reuse functionality instead of coding from scratch.
- Very important for connecting front-end with back-end services.
*/
