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

console.log(users.findIndex((u) => u.id === 1)); // 0
console.log(users.findIndex((u) => u.id === 3)); // -1
