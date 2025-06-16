"use strict";

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.every((n) => n > 0)); // true
console.log(numbers.every((n) => n > 5)); // false

const users = [
  {
    id: 1,
    name: "Samuel",
    age: 18,
  },
  {
    id: 2,
    name: "Nik",
    age: 24,
  },
];

console.log(users.every((u) => u.age >= 18)); // true
