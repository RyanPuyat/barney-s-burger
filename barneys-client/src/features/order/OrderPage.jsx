import { Link } from 'react-router-dom';

function OrderPage() {
  return (
    <div>
      <h1>
        The best pizza.
        <br />
        Straight out of the oven, straight to you.
      </h1>

      <Link to="/menu">Start ordering</Link>
    </div>
  );
}

export default OrderPage;
