const numbers = [1, 2, 3, 4, 5, 6];

const sum = numbers.reduce((acc, number) => acc + number, 0);

console.log(sum);

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

const users = [
  {
    id: 1,
    name: "Samuel",
    status: Status.online,
  },
  {
    id: 2,
    name: "Nataly",
    status: Status.offline,
  },
  {
    id: 3,
    name: "Boris",
    status: Status.online,
  },
];

const activeUsers = users.reduce((activeUsers, user) => {
  if (user.status.name === Status.online.name) {
    activeUsers.push(user);
  }

  return activeUsers;
}, []);

console.log(activeUsers);
