"use strict";

const numbers1 = [1, 2, 3];
const numbers2 = [4, 5, 6];
const numbers3 = [7, 8, 9];

console.log(numbers1.concat(numbers2, numbers3));
console.log([...numbers1, ...numbers2, ...numbers3]);

console.log("\n");

const numbers4 = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];

let arr = [];

const oneArr = (array, index = 0, newArray = []) => {
  array.forEach((e) => {
    if (Array.isArray(e)) {
      oneArr(array);
    } else {
      arr.push(e);
    }
  });
};

oneArr(numbers4);

console.log(arr);
