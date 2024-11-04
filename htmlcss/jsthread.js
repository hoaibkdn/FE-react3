/** @format */

setTimeout(() => {
  console.log('3');
}, 0);
Promise.resolve().then(() => {
  console.log('1');
  setTimeout(() => {
    console.log('4');
  }, 0);
});

Promise.resolve().then(() => {
  console.log('5');
});
console.log('2');
// 2 1 4 5 3
