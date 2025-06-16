const numbers = [-1, 0, 1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((acc, n) => acc + n, 0);

console.log("Sum:", sum);

const max = numbers.reduce((max, n) => (n > max ? n : max));

console.log("Max:", max);

const min = numbers.reduce((min, n) => (n < min ? n : min));

console.log("Min:", min);

const Status = {
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
    status: Status.online,
    role: Roles.admin,
  },
  {
    id: 2,
    name: "Nataly",
    status: Status.offline,
    role: Roles.user,
  },
  {
    id: 3,
    name: "Boris",
    status: Status.online,
    role: Roles.user,
  },
];

const activeUsers = users.reduce((activeUsers, user) => {
  if (user.status.name === Status.online.name) {
    activeUsers.push(user);
  }

  return activeUsers;
}, []);

console.log(activeUsers);

const groupedByRole = users.reduce((acc, user) => {
  acc[user.role.name] = acc[user.role.name] || [];
  acc[user.role.name].push(user);

  return acc;
}, {});

console.log(groupedByRole);
