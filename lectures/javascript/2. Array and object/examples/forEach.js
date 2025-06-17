"use strict";

const numbers = [25, 16, 9, 4, 36];

numbers.forEach((n, i) => {
  console.log(`Index/Value: ${i}/${n}`);
});

numbers.forEach((n) => {
  console.log(Math.sqrt(n));
});

numbers.forEach((number, index, array) => {
  console.log(number);
  console.log(index);
  console.log(array);
});
