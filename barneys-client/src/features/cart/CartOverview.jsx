import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

function CartOverview() {
  const navigate = useNavigate();

  return (
    <div className="mt-40 flex justify-end space-x-10 px-4 py-6">
      <p className="py-2">
        <span className="px-4 text-2xl font-semibold tracking-wider">
          23 Burger's
        </span>
        <span className="px-4 text-2xl font-semibold tracking-wider">
          $23.45
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
