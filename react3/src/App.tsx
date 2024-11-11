/** @format */

import React, { useState } from 'react';
import logo from './logo.svg';
import { Product } from './components';
import './App.css';
interface ProductModel {
  id: number;
  name: string;
  price: number;
}

const products: Array<ProductModel> = [
  {
    id: 1,
    name: 'T-shirt',
    price: 20000,
  },
  {
    id: 2,
    name: 'Sweater',
    price: 50000,
  },
  {
    id: 3,
    name: 'Long Sleeve Shirt',
    price: 120000,
  },
  {
    id: 4,
    name: 'Long Sleeve Shirt',
    price: 520000,
  },
  {
    id: 5,
    name: 'Long Sleeve Shirt 2',
    price: 110000,
  },
];

function App() {
  const [listProducts, setListProducts] = useState<Array<ProductModel>>(
    products || []
  );

  const onClickItem = (id: number) => {
    const itemIdx = listProducts.findIndex((item) => item?.id === id);
    const newList = [...listProducts]; // clone
    newList[itemIdx].price += 10000;
    setListProducts(newList);
  };
  return (
    <div className='App'>
      {listProducts.map((product: ProductModel) => {
        return (
          <Product
            name={product.name}
            price={product.price}
            id={product.id}
            onClick={onClickItem}
          />
        );
      })}
    </div>
  );
}

export default App;

// state vs props

/**
 * Handle onClick
 * when clicking on any item => update it into the top of the list
 */
