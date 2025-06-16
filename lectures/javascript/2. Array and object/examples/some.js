"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numbers.some((n) => n > 8)); // true
console.log(numbers.some((n) => n < 0)); // false
