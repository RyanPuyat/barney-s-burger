import { useSelector } from 'react-redux';
import CreateUser from '../user/CreateUser';
import Button from '../../ui/Button';

function OrderPage() {
  const username = useSelector((state) => state.user.username);

  return (
    <div className="text-center">
      <h1 className="text-6xl/25 font-semibold tracking-wider text-stone-500">
        Barney's <span className="text-yellow-500">Burger</span>
        <br />
        <span className="text-orange-500">
          Sizzling hot, right when you want it
        </span>
      </h1>

      {username === '' ? (
        <CreateUser />
      ) : (
        <Button
          size="lg"
          shape="pill"
          className="uppercase transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-lg hover:ring-2 hover:ring-orange-600"
          to="/menu"
        >
          Continue ordering, {username}
        </Button>
      )}
    </div>
  );
}

export default OrderPage;
