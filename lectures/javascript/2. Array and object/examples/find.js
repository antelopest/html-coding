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

console.log(users.find((u) => u.id === 1)); // { id: 1, name: "Sam" }
console.log(users.find((u) => u.id === 3)); // undefined

const user = users.find((u) => u.id === 1);
user.name = "John";

console.log(user); // { id: 1, name: "John" }
console.log(users); // [{ id: 1, name: "John" }, { id: 2, name: "Nik" }]
