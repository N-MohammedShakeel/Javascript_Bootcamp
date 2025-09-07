/*
    ES6 => ECMAScript 6
        - https://www.ecma-international.org/
        - http://es6-features.org/#Constants
        - https://babeljs.io/repl/#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.6&spec=false&loose=false&code_lz=Q&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.15.3&externalPlugins=&assumptions=%7B%7D
        - https://en.wikipedia.org/wiki/ECMAScript
*/

/*
    ===============================
    ECMAScript (ES) - Quick Notes
    ===============================

    📌 What is ECMAScript?
    ----------------------
    - ECMAScript (ES) is the official standard that defines how JavaScript works.
    - JavaScript is an implementation of the ECMAScript specification.
    - It ensures JavaScript works the same across all browsers.

    📜 History & Versions
    ----------------------
    ES1 (1997) - The first version, basic language definition.

    ES3 (1999) - Popular early version.
        - Added: try/catch, do-while loop, regular expressions.

    ES5 (2009) - Major upgrade before ES6.
        - Added: strict mode ("use strict"), JSON support,
          Array methods (map, filter, forEach, reduce).

    ES6 / ES2015 (2015) - Biggest update ever.
        - let, const
        - Arrow functions (=>)
        - Classes, Modules (import/export)
        - Template literals (`string with ${variable}`)
        - Promises, Default parameters, Spread/Rest operator (...)

    ES7 (2016)
        - Array.includes()
        - Exponentiation operator (**)

    ES8+ (2017 and beyond)
        - async/await
        - Object.entries(), Object.values()
        - Optional chaining (?.), Nullish coalescing (??)
        - Many more modern features every year...

    💡 Key Idea:
    -----------
    - ECMAScript updates happen every year (TC39 committee).
    - Modern browsers support most latest ES features.
    - If supporting older browsers, you may need a "transpiler" like Babel.

    ======================
    Example ES6 Features:
    ======================
*/

// 1. let & const
let name = "Alice"; // block-scoped variable
const pi = 3.14159; // constant value

// 2. Template Literals
console.log(`Hello, ${name}! Pi is approximately ${pi}.`);

// 3. Arrow Function
const square = (n) => n * n;
console.log("Square of 5 =", square(5));

// 4. Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log("Combined Array:", arr2);

// 5. Promise
const myPromise = new Promise((resolve) => {
  setTimeout(() => resolve("✅ Promise resolved!"), 1000);
});
myPromise.then(console.log);
