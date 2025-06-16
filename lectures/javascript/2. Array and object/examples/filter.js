const users = [
  {
    id: 1,
    name: "Samuel",
    status: "Online",
  },
  {
    id: 2,
    name: "Nataly",
    status: "Offline",
  },
  {
    id: 3,
    name: "Boris",
    status: "Online",
  },
];

console.log("Users:");
console.log(users);

console.log("Offline users:");
console.log(users.filter((u) => u.status === "Offline")); // [{ id: 2, name: "Nataly", status: "Offline" }]

console.log("Online users:");
console.log(users.filter((u) => u.status === "Online").map((u) => u.id)); // [1, 3]

const numbers = [1, 2, 3, 4, 5, 6];

console.log("Even numbers:");
console.log(numbers.filter((n) => n % 2 === 0)); // [2, 4, 6]
