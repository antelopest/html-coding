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

console.log(users.map((u) => u.name)); // ['Samuel', 'Nik']

const arr = Array(5)
  .fill(0)
  .map((e, i) => i + 1);

console.log(arr); // [1, 2, 3, 4, 5]
