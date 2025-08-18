// File: event_listeners.js
// Event Listeners: Handling events using addEventListener
// Note: Without DOM, we'll simulate an EventTarget-like object (e.g., Node.js EventEmitter or custom)

// Creating a simple EventTarget-like class for demonstration
class EventEmitter {
  constructor() {
    this.events = {};
  }

  // addEventListener: Registers a callback for an event
  addEventListener(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
  }

  // Helper to trigger events (simulating event firing)
  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((callback) => callback(data));
    }
  }

  // removeEventListener: Removes a specific callback for an event
  removeEventListener(event, callback) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((cb) => cb !== callback);
    }
  }
}

// Using the EventEmitter
const emitter = new EventEmitter();

// Adding event listeners
function handleClick(data) {
  console.log("Click event occurred:", data);
}

function anotherHandler(data) {
  console.log("Another handler for click:", data.message);
}

emitter.addEventListener("click", handleClick);
emitter.addEventListener("click", anotherHandler);

// Triggering an event
emitter.emit("click", { message: "Button clicked!" }); // Outputs both handlers' messages

// Removing a specific listener
emitter.removeEventListener("click", handleClick);
emitter.emit("click", { message: "Second click!" }); // Only anotherHandler runs

// Example: Simulating a custom event with data
emitter.addEventListener("userLogin", (userData) => {
  console.log(`User logged in: ${userData.name}, ID: ${userData.id}`);
});
emitter.emit("userLogin", { name: "Alice", id: 123 }); // Outputs: User logged in: Alice, ID: 123
