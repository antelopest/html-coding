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

console.log(users.indexOf(users[0])); // 0

console.log(users.indexOf({ id: 1, name: "Samuel" })); // -1

console.log(
  users
    .map((u) => JSON.stringify(u))
    .indexOf(JSON.stringify({ id: 2, name: "Nik" })),
); // 1

const numbers = [1, 2, 3, 4, 5];

console.log(numbers.indexOf(2)); // 1

console.log(numbers.indexOf(6)); // -1

const strings = ["123", "abc", "345"];

console.log(strings.indexOf("123")); // 0

console.log(strings.indexOf("")); // -1
