// File: classes.js
// Classes: ES6 syntax for object-oriented programming

// Defining a class
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Method: Defined without 'function' keyword
  greet() {
    return `Hello, I'm ${this.name}, ${this.age} years old.`;
  }

  // Static method: Belongs to class, not instances
  static isAdult(age) {
    return age >= 18;
  }
}

// Creating an instance
const alice = new Person("Alice", 30);
console.log(alice.greet()); // Outputs: Hello, I'm Alice, 30 years old.
console.log(Person.isAdult(20)); // Outputs: true

// Inheritance: Extending a class
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // Call parent constructor
    this.grade = grade;
  }

  // Override parent method
  greet() {
    return `${super.greet()} I'm a student in grade ${this.grade}.`;
  }

  // New method
  study() {
    return `${this.name} is studying.`;
  }
}

const bob = new Student("Bob", 15, 10);
console.log(bob.greet()); // Outputs: Hello, I'm Bob, 15 years old. I'm a student in grade 10.
console.log(bob.study()); // Outputs: Bob is studying.
console.log(Student.isAdult(bob.age)); // Outputs: false
