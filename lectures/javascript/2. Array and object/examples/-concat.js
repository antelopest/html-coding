"use strict";

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];

console.log(numbers1.concat(numbers2, numbers3));
console.log([...numbers1, ...numbers2, ...numbers3]);

const numbers4 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
