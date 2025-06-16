"use strict";

const Statuses = {
  online: {
    id: 1,
    name: "Online",
  },
  offline: {
    id: 2,
    name: "Offline",
  },
};

const Roles = {
  admin: {
    id: 1,
    name: "Admin",
  },
  user: {
    id: 2,
    name: "User",
  },
};

const users = [
  {
    id: 1,
    name: "Samuel",
    status: Statuses.online,
    role: Roles.admin,
  },
  {
    id: 2,
    name: "Nataly",
    status: Statuses.offline,
    role: Roles.user,
  },
  {
    id: 3,
    name: "Boris",
    status: Statuses.online,
    role: Roles.user,
  },
];

const user1 = {
  id: 4,
  name: "Timon",
  status: Statuses.online,
  role: Roles.user,
};

const user2 = {
  id: 5,
  name: "John",
  status: Statuses.online,
  role: Roles.user,
};

const user3 = {
  id: 6,
  name: "Donni",
  status: Statuses.online,
  role: Roles.user,
};

console.log(users.push(user1)); // 4
console.log(users.push(user2, user3)); // 6

console.log(users);
