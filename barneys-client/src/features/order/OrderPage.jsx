import CreateUser from '../user/CreateUser';

function OrderPage() {
  return (
    <div className="text-center">
      <h1 className="text-6xl/25 font-semibold tracking-wider text-stone-500">
        Barney's <span className="text-yellow-500">Burger</span>
        <br />
        <span className="text-orange-500">
          Sizzling hot, right when you want it
        </span>
      </h1>

      <CreateUser />
    </div>
  );
}

export default OrderPage;
