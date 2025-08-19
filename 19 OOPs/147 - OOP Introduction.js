/*
------------------------------------------------------
📌 Introduction to OOP (Object-Oriented Programming)
------------------------------------------------------

1️⃣ What is OOP?
- OOP stands for Object-Oriented Programming.
- It is a programming paradigm (style) based on the concept of "objects".
- Objects represent real-world entities → with properties (data) and methods (behavior).
- Main goal: make code reusable, modular, and easier to maintain.

------------------------------------------------------

2️⃣ Core Principles of OOP
------------------------------------------------------
1. Encapsulation
   - Bundling data (properties) and methods (functions) inside a single unit (class).
   - Example: A "Car" object has speed, color (data) and drive(), brake() (methods).

2. Abstraction
   - Hiding internal implementation details and exposing only what’s necessary.
   - Example: You use .push() on an array without knowing its internal code.

3. Inheritance
   - A class (child) can inherit properties and methods from another class (parent).
   - Promotes code reusability.
   - Example: A "SportsCar" inherits from "Car" but adds turboBoost().

4. Polymorphism
   - "Many forms" → The ability of different classes to provide a different 
     implementation of the same method.
   - Example: Dog.speak() → "Bark", Cat.speak() → "Meow"

------------------------------------------------------

3️⃣ OOP in JavaScript
- JavaScript is prototype-based but supports OOP using "classes" (introduced in ES6).
- Objects can be created using:
   - Object literals {}
   - Constructor functions
   - ES6 Classes

------------------------------------------------------

4️⃣ Example: Class in JS
------------------------------------------------------
class Animal {
  constructor(name) {
    this.name = name;  // property
  }

  speak() {            // method
    console.log(`${this.name} makes a sound.`);
  }
}

class Dog extends Animal {
  speak() {            // polymorphism (method overriding)
    console.log(`${this.name} barks.`);
  }
}

const dog1 = new Dog("Buddy");
dog1.speak(); // Output: Buddy barks.

------------------------------------------------------

📌 Summary
- OOP = Organizing code around objects.
- Four pillars = Encapsulation, Abstraction, Inheritance, Polymorphism.
- In JS, OOP can be implemented using classes, prototypes, and objects.
*/
