"use strict";

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.splice(1, 2)); // [2, 3]
console.log(numbers); // [1, 4, 5]

console.log(numbers.splice(0, 1, ...[1, 2, 3])); // [1]
console.log(numbers); // [1, 2, 3, 4, 5]

console.log(numbers.splice(0, 3, 1, 2, 3)); // [1, 2, 3]
console.log(numbers); // [1, 2, 3, 4, 5]

console.log(numbers.splice(1, 0)); // []
console.log(numbers); // [1, 2, 3, 4, 5];
