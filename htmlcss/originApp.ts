/** @format */

const sumA = function (a: number, b: number): number {
  return a + b;
};
sumA(1, 4);

interface Model {
  color?: string;
  quantity?: number;
  avaible?: boolean;
}

interface Product2 extends Model {
  id: number;
  name: string;
  price?: number | null;
}

type Product = Product2 & {
  shopName?: string;
  convertPrice?: () => string;
};

type Furniture = Model;
type Electricity = Product;

interface Shop<T> {
  product: T;
  name: string;
  id: number;

}

const shopHari: Shop<Furniture>= {
  id: 1,
  name: 'Harrrri',
  product: {
    color: 'black',
    quantity: 10,
    avaible: true,
  },
};

const shopEle: Shop<Electricity>= {
  id: 1,
  name: 'Harrrri',
  product: {
    id: 1,
		name: 'lamb'
  },
};

const products: Array<Product> = [
  {
    id: 1,
    name: 'Tshirt',
    price: 100000,
  },
  {
    id: 2,
    name: 'Pant',
  },
];

// abstract class
abstract class Human {}
class Female extends Human {}
new Female();

const MAX_ROW = 10000;

const regionCode = {
  VN: '84',
  SG: '65',
  MY: '60',
  ID: '63',
};

enum regions {
  VN = 84,
  SG = 65,
}

enum Direction {
  UP = 'S',
  DOWN = 'X',
}


const users = []
interface User {
	name: string
}
type UserModel = { [key: string]: User}
const obj: UserModel = {
	"1": {
		name: 'John'
	},
	"2": {
		name: 'John'
	}
}