"use strict";

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.unshift(0)); // return array.length
console.log(numbers.unshift(-1)); // return array.length
console.log(numbers); // [-1, 0, 1, 2, 3, 4, 5]

const numbers1 = [-3, -2];

console.log(numbers.unshift(...numbers1)); // 9
console.log(numbers); // [-3, -2, -1, 0, 1, 2, 3, 4, 5]

console.log(numbers.unshift(-5, -4));
console.log(numbers);
