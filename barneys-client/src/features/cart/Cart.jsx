import { Link } from 'react-router-dom';
import CartItem from './CartItem';
import Button from '../../ui/Button';
import { useNavigate } from 'react-router-dom';

const fakeCart = [
  {
    burgerId: 1,
    name: 'Cream & Crave',
    quantity: 1,
    unitPrice: 4,
    totalPrice: 4,
  },
  {
    burgerId: 8,
    name: 'BBQ Chicken',
    quantity: 1,
    unitPrice: 4,
    totalPrice: 4,
  },
];

function Cart() {
  const cart = fakeCart;
  const navigate = useNavigate();
  return (
    <div className="px-2 py-3 sm:mx-50">
      {/* <Link to="/menu">&larr; Back to menu</Link> */}

      <h2 className="text-2xl font-semibold">Your cart, %NAME%</h2>

      <ul className="mt-7 divide-y divide-stone-200 border-b border-stone-200">
        {cart.map((item) => (
          <CartItem item={item} key={item.burgerId} />
        ))}
      </ul>

      <div className="mt-6 space-x-2">
        <Button
          shape="pill"
          className="uppercase transition-all duration-300 ease-in-out hover:scale-105"
          onClick={() => navigate('/order/new')}
        >
          Order burger
        </Button>
        {/* <Link to="/order/new">Order burger</Link> */}
        <Button
          shape="pill"
          className="uppercase transition-all duration-300 ease-in-out hover:scale-105"
          variant="outline"
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
