/** @format */

import React, {
  useState,
  useCallback,
  useMemo,
  useEffect,
  useContext,
} from 'react';
import Product from './Product';
import { ListProductContext } from '../hooks/context';

interface ProductModel {
  id: number;
  name: string;
  price: number;
}

const heavyCompute = () => {
  let sum = 0;
  for (let i = 0; i < 1000000000; i++) {
    sum += 1;
  }
  return sum;
};

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

function ListProducts() {
  const [listProducts, setListProducts] = useState<Array<ProductModel>>(
    products || []
  );

  const [count, setCount] = useState(0);
  const { toggleList } = useContext(ListProductContext);
  console.log('toggleList ', toggleList);

  useEffect(() => {
    console.log('did mount');
    if (count > 5) {
      listProducts.push({
        id: 6,
        name: 'Long Sleeve Shirt 6',
        price: 160000,
      });
    }
    const timerFn = setTimeout(() => {
      console.log('hello ');
    }, 2000);
    return () => {
      console.log('will unmount');
      clearTimeout(timerFn);
    };
  }, [count, listProducts]);
  // didmount: []
  // did update: [dependencies]
  // will unmount

  const onClickItem = useCallback(
    (id: number) => {
      const itemIdx = listProducts.findIndex((item) => item?.id === id);
      const newList = [...listProducts]; // clone
      newList[itemIdx].price += 10000;
      // const [clickedItem] = newList.splice(itemIdx, 1);
      setListProducts(newList);
    },
    [listProducts]
  ); //

  // const sumValue = useMemo(() => heavyCompute(), []); // didmount

  const handleIncrease = () => {
    setCount(count + 1);
  };

  return (
    <div className='App'>
      <button onClick={() => handleIncrease()}>Increase {count}</button>
      {/* <h2>{sumValue}</h2> */}
      {listProducts.map((product: ProductModel, index) => {
        return (
          <Product
            key={index}
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

export default ListProducts;

// state vs props

/**
 * Handle onClick
 * when clicking on any item => update it into the top of the list
 */
