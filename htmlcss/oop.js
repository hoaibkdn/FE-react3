/** @format */

// normal: cach function dc call
// arrow: ke thua pham vi bao quanh no

const sum = () => {
  console.log('this @@@ ', this);
};
// sum();

const obj = {
  big: 100,
  small: 4,
  sum: sum,
};

const obj2 = {
  val: 10,
  test: function () {
    const arrowTest = () => {
      console.log('this ## obj ', this);
    };
    arrowTest();
  },
};

obj2.test();

// obj.sum();

function getNum() {
  let count = 0;
  return {
    increase: function () {
      count++;
      return count;
    },
    decrease: function () {
      count--;
      return count;
    },
  };
}

const increase = function (num) {
  num++;
  return num;
};

getNum().increase();
getNum().increase();
getNum().increase();
getNum().increase(); // 4

getNum().decrease(); // 3

// OOP
class Shop {
  constructor(name, phone) {
    this.name = name;
    this.phone = phone;
    this.isPreferred = false;
    this.created = new Date();
  }
  setPrefer(value) {
    this.isPreferred = value;
  }
  getRegion() {
    const countryCodes = {
      '+84': 'VN', // Vietnam
      '+65': 'SG', // Singapore
      '+60': 'MY', // Malaysia
    };

    // Extract the country code from the phone number
    const code = this.phone.split(' ')[0]; // Get the first part of the phone number

    return countryCodes[code] || 'Unknown'; // Return the region or 'Unknown' if not found
  }
  formatDate() {}
}
/**
 * +84: VN
 * +65: SG
 * +60: MY
 */
const furniture = new Shop('Tanpo', '+84 784 01213');
const typo = new Shop('Typo', '+65 9684 3455');
const maybank = new Shop('Typo', '+60 234234 3241234');

furniture.setPrefer(true);
console.log('furniture ', furniture);

const Shop2 = function (name) {
  this.name = name;
  this.isPreferred = false;
  this.created = new Date();
};

Shop2.prototype.setPrefer = function (value) {
  this.isPreferred = value;
};

const woodenShop = new Shop2('Wooden');
console.log('woodenShop ', woodenShop);

const nums = [1, 4, 3, 6];
const sumArray = function (arr) {
  return arr.reduce((acc, item) => acc + item, 0);
};
sumArray(nums);

Array.prototype.sum = function () {
  console.log('this arr ', this);
  return this.reduce((acc, item) => acc + item, 0);
};

console.log(nums.sum());

class ClothShop extends Shop {
  constructor(name, phone) {
    super(name, phone);
    this.categories = []; //
  }

  setPrefer() {
    // overwrite
  }
  setCategory(cate) {
    this.categories.push(cate);
  }
}

const cloth2 = new ClothShop();
console.log('cloth2 ', cloth2);

const smith = {
  birthDate: '1990-03-01',
  getAge: function () {
    return new Date().getFullYear() - new Date(this.birthDate).getFullYear();
  },
};

console.log('smith ', smith.getAge());

const john = {
  birthDate: '1992-03-10',
  // getAge: function () {
  //   return smith.getAge.bind({
  //     birthDate: this.birthDate,
  //   })();
  // },
};

const getAge2 = smith.getAge.bind(john);
console.log(getAge2());

// console.log('age ', john.getAge());

// bind, call, apply
// bind: create new function, change context
// apply: change context,
// call: change context

// Homework
function SortedArray(nums) {
  this.numbers = nums; // [1, 3, 5]
}

SortedArray.prototype.get = function (num) {
  // return index in the array
};
SortedArray.prototype.set = function (num) {
  // [1, 2, 3, 3, 5, 6]
  // add the number in order
};

SortedArray.prototype.remove = function (num) {
  // remove the input number in the array
};
