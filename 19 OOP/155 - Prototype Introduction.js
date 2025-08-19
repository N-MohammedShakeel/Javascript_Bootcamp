/*
    Prototype
        - Introduction
        - Prototypes are the mechanism by which JavaScript objects
        inherit features from one another.
*/

class User {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

let userOne = new User(100, "MS");
console.log(userOne.u);

console.log(User.prototype);

let strOne = "MS";

console.log(String.prototype);
