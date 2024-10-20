/** @format */

// hoisting
// var c = a2 + 20; // 30
// console.log('c ', c);
// console.log('a ', a2);
window.test = 10;
console.log(window);

// var: ES5
let a = 10; // number
var b = 'Hello'; // string

// ES6
let a2 = 10;
const arr = []; // address
arr.push(7);

for (let i = 0; i < 5; i++) {
  // i = 0 i=1  i=2 i=3
  setTimeout(() => {
    console.log(i); // 0 1 2 3
  }, 1000);
}

// space complexity
// time complexity
function get() {
  var x = '';
}
get();
