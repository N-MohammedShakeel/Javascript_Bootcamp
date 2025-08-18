function Task(description) {
  return {
    id: Symbol(description),
    description,
    completed: false,
  };
}

let tasks = [];

function addTask(desc) {
  tasks.push(Task(desc));
  console.log(`✅ Task Added: "${desc}"`);
}

function removeTask(desc) {
  tasks = tasks.filter((task) => task.description !== desc);
  console.log(`🗑 Task Removed: "${desc}"`);
}

function showTasks() {
  console.log("📋 To-Do List:");
  for (let task of tasks) {
    console.log(
      `- ${task.description} [${task.completed ? "Done" : "Pending"}]`
    );
  }
}

function demoTodo() {
  addTask("Learn JavaScript");
  addTask("Build a project");
  showTasks();
  removeTask("Learn JavaScript");
  showTasks();
}
