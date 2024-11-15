/** @format */

import { useCallback, memo } from 'react';

// props: property
type Props = {
  id: number;
  name: string;
  price?: number;
  onClick?: (id: number) => void;
};

const Product = ({ id, name, price, onClick }: Props) => {
  console.log('id ', id);

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
export default memo(Product, (prevProps, nextProps) => {
  return prevProps.price === nextProps.price;
});
