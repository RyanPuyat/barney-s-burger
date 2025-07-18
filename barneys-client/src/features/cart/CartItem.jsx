import { useSelector } from 'react-redux';
import { formatCurrency } from '../../utils/helpers';
import DeleteItem from './DeleteItem';
import UpdateItemQuantity from './UpdateItemQuantity';
import { getCurrentQuantityById } from './cartSlice';

function CartItem({ item }) {
  const { burgerId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityById(burgerId));

  return (
    <li className="py-3 sm:flex sm:justify-between sm:text-center">
      <p className="mt-10 mb-2 text-lg sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between text-center sm:gap-20">
        <p className="mt-10 text-sm font-semibold">
          {formatCurrency(totalPrice)}
        </p>
        <UpdateItemQuantity
          burgerId={burgerId}
          currentQuantity={currentQuantity}
        />
        <DeleteItem burgerId={burgerId} />
      </div>
    </li>
  );
}

export default CartItem;
