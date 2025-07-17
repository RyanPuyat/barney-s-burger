import CartItem from './CartItem';
import Button from '../../ui/Button';
import LinkButton from '../../ui/LinkButton';
import EmptyCart from './EmptyCart';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, getCart } from './cartSlice';

// const fakeCart = [
//   {
//     burgerId: 1,
//     name: 'Cream & Crave',
//     quantity: 1,
//     unitPrice: 4,
//     totalPrice: 4,
//   },
//   {
//     burgerId: 8,
//     name: 'BBQ Chicken',
//     quantity: 1,
//     unitPrice: 4,
//     totalPrice: 4,
//   },
// ];

function Cart() {
  // const cart = fakeCart;
  const navigate = useNavigate();
  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const dispatch = useDispatch();

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="mx-auto w-full max-w-[90%] px-4 py-3">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <h2 className="mt-8 text-2xl font-semibold">Your cart, {username}</h2>

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
          onClick={() => dispatch(clearCart())}
        >
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
