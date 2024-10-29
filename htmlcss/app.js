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

// for (let i = 0; i < 5; i++) {
//   // i = 0 i=1  i=2 i=3
//   setTimeout(() => {
//     console.log(i); // 0 1 2 3
//   }, 1000);
// }

// space complexity
// time complexity
function get() {
  var x = '';
}
get();

// break continue return

// loop: 1-> 100
function check() {
  for (let i = 0; i < 100; i++) {
    console.log('hello ', i);
    if (i > 90) {
      return i;
    }
    if (i % 10 === 0) {
      // 10 skip
      continue;
    }
    if (i % 3 === 0) {
      break; // break the loop
    }
  }

  console.log('asdh');
}

let i = 20;

// a-> b -> c

while (i < 20) {
  //
  console.log('hello ', i);
  i++;
}

do {
  console.log('hello do', i);
  i++;
} while (i < 20);

/**
 * const arr = [4, 3, 1, 7, 9, 10, 2, 5]
 * 1. find the first item diving 5 -> output: 10
 * 2. return list of numbers % 5 -> output: [10, 5]
 * 3. find the max number -> output: 10
 */

const arr2 = [4, 3, 1, 7, 9, 10, 2, 5];

function findFirstNum(arr, dividedNum) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % dividedNum === 0) {
      return arr[i];
    }
  }

  return -1;
}

function findListNum(arr, dividedNum) {
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % dividedNum === 0) {
      res.push(arr[i]);
    }
  }
  return res;
}
function findMax(arr) {
  // []
  let max = arr[0] || -1; // underfined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findFirstNum(arr2, 5));
console.log(findListNum(arr2, 5));
console.log(findMax(arr2));

const hao = {
  name: 'Hao',
  age: 24,
  employed: true,
}; //

const product = {
  name: 'Iphone 16',
  produceDate: '2024-09-12',
};

console.log(product.name);
console.log(product);

const products = [
  {
    name: 'Iphone 16',
    quantity: 10,
  },
  {
    name: 'Galaxy Zip 24',
    quantity: 4,
  },
  {
    name: 'Oppo',
    quantity: 15,
  },
];

// Calculate the sum of quantity of products
// return number: 29
function sumQuantity(products) {}

const marks = [
  {
    name: 'Tom',
    mark: 9,
  },
  {
    name: 'Jerry',
    mark: 3,
  },
  null,
  {
    name: 'Blue',
    mark: 3,
  },
  undefined,
  {
    name: 'Yellow',
    mark: 4,
  },
];  // n => O(n)

// 1.find 3:  ['Jerry', 'Blue']
// 2.
// find highest mark tom = 8
// 10: 1
// return array marks which everyone should add +2



/**
 * input name: Yellow
 * find index of the item in the array
 * update this item into the top of the list, can return a new list
 */


// console.log(
//   marks.unshift(
//     marks.map(
//       (mark) =>  mark.name // 
//     ) // 6 => return new array, ['Tom', 'Jerry', 'Blue', 'Yellow']  forEach -> undefined
//     .indexOf('Yellow'))); // number index = 3



function moveToTop(arr, nameToFind) {
  let item = null; // O(1)
  const newArr = []; // new Array() O(1)

  // filter list without nameTofind
  for (let i = 0; i < arr.length; i++) { // O(n)
    if (!arr[i]) continue // O(1)
    if (arr[i].name === nameToFind) { // 
      item = arr[i];
    } else {
      newArr.push(arr[i]);
    }
  }

  // add to top
  if (item) { // O(1)
    newArr.unshift(item); // O(n)
  }

  return newArr;
} // O(2n) = O(n) O(logn) 
const updatedMarks = moveToTop(marks, 'Yellow');
console.log('move 1 ', updatedMarks);

function moveToTop2(arr, name) {
  let matchedItem = null
  const newArr = arr.filter((item) => {
    if (item?.name === name) {
      matchedItem = item
    }
    return item && item.name !== name
  }) // O(n)
  return matchedItem ? [matchedItem, ...newArr] : newArr // O(n)
} // O(2n) ~ O(n)

console.log('move 2', moveToTop2(marks, 'Yellow'))



// Phuc
function findStudentsWithMark3(marks) {
  const studentsWithMark3 = [];

  for (let i = 0; i < marks.length; i++) {
    const student = marks[i];
    if (student && student.mark === 3) {
      studentsWithMark3.push(student);
    }
  }

  return studentsWithMark3;
}
const result = findStudentsWithMark3(marks);
console.log(result);

// Hao
const score = marks.filter(m => m && m.mark === 3);

const indexScore = marks.findIndex(item => item?.mark === 3) // number: 1

console.log(score);


// find highest mark tom = 8
// 10: 1
// return array marks which everyone should add +2

function findHighestMark(arr) { // [{}, 2, 4]
  // []
  let max = arr[0]?.mark || -1; // underfined
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] && arr[i].mark > max) {
      max = arr[i].mark;
    }
  }
  return max;
}

function updateMarks(arr) {
  const highestMark = findHighestMark(arr) // number 9
  const distance = 10 - highestMark
  const filtedArr = arr.filter(item => item) // 4 objects
  return filtedArr.map(item => ({
    ...item,
    mark: item.mark + distance
  })) // 4
}

console.log('updateMarks ', updateMarks(marks))


// unshift: insert into the first index
// shift: get the item in the first index

const nums = [1, 3, 6, 0, 2, 9] 
const item = nums.shift() // 1
const item2 = nums[0]
// nums = [3,6,0,3,9]

// pop(): get the last item, modify the current array
// push(): insert into the last index
const lastItem = nums.pop()
const lastItem2 = nums[nums.length - 1]
// nums.push({})

const nums2 = [3, 1] 
// [1, 3, 6, 0, 2, 9, 3, 1]
const newArr1 = nums.concat(nums2) 
console.log('newArr1', newArr1)

const newArr2 = [...nums, ...nums2] // Es6
console.log('newArr2', newArr2)

// slice: return a new array
const slicedArr2 = newArr2.slice(0, 4)
console.log('slicedArr2 ', slicedArr2)
// splice: modifine the current array

slicedArr2.splice(2, 1, {num: 9})
console.log('slicedArr2 ', slicedArr2)

/**
 * 1. moveToTop2, you have to modify the current array
 * 2. sort the marks array following decrement 
 */
// Hao
function moveToTop3(arr) {
  const index = arr.findIndex((a) => a?.name === "Yellow"); // 3 O(n)
  let newArr = []
  if (index !== -1) {
    sliceItem = arr.splice(index, arr.length); // [3, 6) = O(n)
    newArr = [...sliceItem, ...arr] // O(n)
    return newArr
    // return [...sliceItem, ...arr];
    // console.log(sliceItem);
  }
  return arr;
} // O(2n) ~ O(n)
// console.log('moveToTop3 ', moveToTop3(marks));

// Phuc
function moveToTop4(arr, name) { // reference
  console.log('arr ', arr)
  const index = arr.findIndex(item => item?.name === name); // O(1)
  console.log('index ', index)
  if(index !== -1) {
      const temporaryArray = arr.splice(index, 1); // [3, 1) O(1)
      const removed = temporaryArray[0]; // {name: 'Yellow', mark: 6} O(1)

      arr.unshift(removed);
  }
  return arr;
} // => O(1) O(3n) ~ O(n)
console.log('moveToTop4', moveToTop4(marks, 'Yellow'))



// function decreaseSort(arr) { // 
//   let result = [...arr].reduce((a, b) => {
//     return a.mark > b.mark ? a : b;
//   },);
//   return result;
// }

// console.log(decreaseSort(marks));

function sortDecrement(arr) {
  const data = arr.filter(item => item)
  data.sort((a, b) => a?.name > b?.name ? 1 : -1)
  return data
}

console.log('data sorted', sortDecrement(marks))
console.log('after sorting ', marks)


// reduce
const nums3 = [1, 3, 6, 0, 2, 9]

function sum(nums) {
  let sum = 0
  for(let i = 0; i < nums.length; i++) {
    if(!nums[i]) continue
    sum += nums[i] // 4
  }
  return sum
}
console.log('sum ', sum(marks))

function sum2(nums) {
  return nums.reduce((prevValue, currValue) => prevValue + currValue, 0)
}
console.log('sum2 ', sum2(nums3))

function sumMarks(marks) {
  return marks.reduce((prevValue, currMark) => {
    if(!currMark) {
      return prevValue
    }
    return prevValue + currMark.mark // number
  }, 0)
}
console.log('sumMarks ', sumMarks(marks))

const products2 = [{
  name: 'Iphone 16',
  colors: ['white', 'ocean', 'pink', 'purple'], 
  quantity: 20,
  price: 20000000
}, {
  name: 'Iphone 16 promax',
  colors: ['white', 'ocean', 'yellow'],
  quantity: 40,
  price: 30000000
}, {
  name: 'Iphone 15',
  colors: ['purple'],
  quantity: 13,
  price: 10000000
}, {
  name: 'samsung zip 4',
  colors: ['gray', 'green'],
  quantity: 2,
  price: 25000000
}]

// 1. return a new array: [{name: '', price: 20000000}, {name: '', price: 20000000}, {name: '', price: 20000000}]
function convertProducts(products) {
  return 
}


function convert(products) {
  return products.reduce((init, currProduct) => {
    if(currProduct) {
      init.push({ name: currProduct.name, price: currProduct.price});
    }
    return init
  }, []);
}

console.log(convert(products2));

console.log(convertProducts(products2))

function findIphone(products2) {
  return products2.reduce((acc, product) => {
      if (product?.name?.startsWith('Iphone')) {
        acc.push({
          name: product.name,
          price: product.price
        });
      }
      return acc;
    }, []);
}
console.log(findIphone(products2));

/**
 * [{
  name: 'Iphone 16',
  colors: 'white, ocean, pink, purple', 
}, {
  name: 'Iphone 16 promax',
  colors: 'white, ocean, yellow',
}, {
  name: 'Iphone 15',
  colors: 'purple',
  quantity: 13,
  price: 10000000
}, {
  name: 'samsung zip 4',
  colors: 'gray, green',
}]
 */

// let sumColor = ''
// for (let i = 0; i < arrColors.length; i++) {
//   sumColor += `${arrColors[i]}${i === arrColors.length - 1 ? '' : ', '}`
// }

function convertColor(products2) {
  return products2.reduce((acc, product) => {
      if (product?.name?.startsWith('Iphone')) {
          acc.push({
              name: product.name,
              colors: product.colors.join(', ')
          });
      }
      return acc;
  }, []);
}

// [1, 2, 4, 5] => '[1, 2, 4, 5]'
function convert(products) {
  return products.reduce((prevVal, currVal) => {
    prevVal.push({
      name: currVal.name,
      colors: JSON.stringify(currVal.colors),
    });
    return prevVal;
  }, []);
}
console.log('convertColor ', convertColor(products2))
console.log('convert ', convert(products2));
 

const keys = Object.keys(products[0])
console.log('keys ', keys)

const values = Object.values(products[0])
console.log('values ', values)

// const duplicatedNums = [4, 3, 1, 4, 4, 6, 2, 8, 2]

// return array of unique numbers in any order  [4, 3, 1, 6, 2, 8] [3, 1, 4, 6, 2, 8]
const duplicateNum = [4, 3, 1, 4, 4, 6 , 2, 8 ,2, 0];

const findValue2 = duplicateNum.filter((item, index) => duplicateNum.indexOf(item) !== index);
const findValue = duplicateNum.filter((item, index) => { // 0 O(n * n)
  const indexDup = duplicateNum.indexOf(item)  // 0
  if(indexDup !== index) // true
    return item
}); // [4, 4, 2]
console.log('findValue ', findValue);

function removeDuplicates2(arr) {
  return Object.values(
    arr.reduce((acc, curr)=> {
      if(acc[curr] === undefined) {
          acc[curr] = curr
      }
      return acc
  }, {}) // O(n + n) => O(2n) => O(n)
)
}

console.log('removeDuplicates2 ', removeDuplicates2(duplicateNum))

const products3 = [{
  name: 'Iphone 16',
  colors: ['white', 'ocean', 'pink', 'purple'], 
  quantity: 20,
  price: 20000000
}, {
  name: 'Iphone 16 promax',
  colors: ['white', 'ocean', 'yellow'],
  quantity: 40,
  price: 30000000
}, {
  name: 'Iphone 15',
  colors: ['purple'],
  quantity: 13,
  price: 10000000
}, {
  name: 'samsung zip 4',
  colors: ['gray', 'green'],
  quantity: 2,
  price: 14000000
}]

/**
 * Homework:
 * 1. write a convert function returning
    { totalQuantity: 75, products: [{ name: '', price: '30,000,000' }] }
   2. merge sorted numbers
   given 2 array sorted numbers: nums1 = [0, 4, 9], nums2 = [2, 2, 4, 7, 9]
   merge => return a new array = [0, 2, 2, 4, 4, 7, 9, 9]
   // O(n + m)
 */
