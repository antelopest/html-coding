"use strict";

const users = [
  {
    id: 1,
    name: "Samuel",
  },
  {
    id: 2,
    name: "Nik",
  },
];

console.log(users.includes({ id: 1, name: "Samuel" })); // false

const user = users
  .map((u) => JSON.stringify(u))
  .includes(JSON.stringify({ id: 1, name: "Samuel" }));

console.log(user); // true

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.includes(1)); // true
console.log(numbers.includes(6)); // false
