/** @format */

import { useCallback, memo, useContext } from 'react';
import { ListProductContext } from './../hooks/context';

// props: property
type Props = {
  id: number;
  name: string;
  price?: number;
  onClick?: (id: number) => void;
};

const Product = ({ id, name, price, onClick }: Props) => {
  console.log('id ', id);
  // const { toggleList } = useContext(ListProductContext);
  // console.log('toggleList ', toggleList);

  const handleClick = useCallback(() => {
    if (typeof onClick === 'function') {
      onClick(id);
    }
  }, [id, onClick]);
  return (
    <button style={{ display: 'block' }} onClick={handleClick}>
      <h3>{name}</h3>
      <i>{price}</i>
    </button>
  );
};
const areEqual = function (prevProps: Props, nextProps: Props) {
  return prevProps.price === nextProps.price;
};
// export default memo(Product); // shallow comparision // number, string, boolean, {{}} array
export default memo(Product, areEqual);
// HOC
