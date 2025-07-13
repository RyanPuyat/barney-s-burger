import { useSelector } from 'react-redux';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';
import { getTotalCartPrice, getTotalCartQuantity } from './cartSlice';
import { formatCurrency } from '../../utils/helpers';

function CartOverview() {
  const navigate = useNavigate();
  const totalCartQuantity = useSelector(getTotalCartQuantity);
  const totalCartPrice = useSelector(getTotalCartPrice);

  if (!totalCartQuantity) return null;

  return (
    <div className="mt-20 flex flex-col items-center rounded-full bg-gray-100 py-5 md:mt-40 md:flex-row md:justify-center md:space-x-10 md:px-4 md:py-6">
      <p className="mb-4 md:mb-0 md:py-2">
        <span className="px-4 text-2xl font-semibold tracking-wider">
          {totalCartQuantity} Burger's
        </span>
        <span className="px-4 text-2xl font-semibold tracking-wider">
          {formatCurrency(totalCartPrice)}
        </span>
      </p>
      <Button
        shape="rectangle"
        variant="secondary"
        className="transition-all duration-300 ease-in-out hover:scale-105"
        onClick={() => navigate('/cart')}
      >
        Open cart
      </Button>
    </div>
  );
}

export default CartOverview;
