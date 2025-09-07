/*
    ==============================
    Nullish Coalescing (??) vs OR (||)
    ==============================
    ?? → returns right-hand value ONLY if left-hand is null or undefined
    || → returns right-hand value if left-hand is falsy (0, "", false, null, undefined, NaN)
*/

let username = null;
console.log(username ?? "Guest"); // "Guest" (because username is null)

let points = 0;
console.log(points || 100); // 100 (because 0 is falsy)
console.log(points ?? 100); // 0 (because 0 is NOT null/undefined, so left value kept)
