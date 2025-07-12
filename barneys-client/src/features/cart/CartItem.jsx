import Button from '../../ui/Button';
import { formatCurrency } from '../../utils/helpers';

function CartItem({ item }) {
  const { name, quantity, totalPrice } = item;

  return (
    <li className="py-3 sm:flex sm:justify-between sm:text-center">
      <p className="mb-2 text-lg sm:mb-0">
        {quantity}&times; {name}
      </p>
      <div className="flex justify-between text-center sm:gap-20">
        <p className="text-sm font-semibold">{formatCurrency(totalPrice)}</p>
        <Button size="sm" shape="pill" className="uppercase">
          Delete
        </Button>
      </div>
    </li>
  );
}

export default CartItem;
