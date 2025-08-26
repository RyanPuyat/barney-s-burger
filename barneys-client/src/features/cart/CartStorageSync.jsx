import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getCart } from '../cart/cartSlice';

function CartStorageSync() {
  const cart = useSelector(getCart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  return null; // This component doesn't render anything
}

export default CartStorageSync;
