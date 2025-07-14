import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getCurrentQuantityById } from '../cart/cartSlice';
import DeleteItem from '../cart/DeleteItem';
import UpdateItemQuantity from '../cart/UpdateItemQuantity';

function MenuItem({ burger }) {
  const dispatch = useDispatch();

  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = burger;
  const currentQuantity = useSelector(getCurrentQuantityById(id));
  const isInCart = currentQuantity > 0;

  function handleAddtoCart() {
    const newItem = {
      burgerId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };

    dispatch(addItem(newItem));
  }

  return (
    <li className="relative z-5 mx-auto mb-20 h-40 w-60 rounded-br-3xl bg-gray-50 shadow-lg md:mb-0">
      <img
        src={imageUrl}
        alt={name}
        className={`absolute -bottom-5 left-8 w-32 -translate-x-1/2 object-cover transition-all duration-300 ease-in-out hover:scale-120 ${soldOut ? 'opacity-70 grayscale' : ''}`}
      />

      <p className="mt-1 ml-4 text-xl font-semibold text-yellow-500">{name}</p>
      <div className="mt-2 ml-6 flex flex-col justify-between space-y-1 text-xs">
        <p className="ml-15 line-clamp-2 h-20 overflow-hidden p-1 tracking-wide text-ellipsis italic">
          {ingredients.join(', ')}
        </p>
        <p className="ml-[8rem] text-lg font-semibold whitespace-nowrap text-orange-500">
          {!soldOut ? formatCurrency(unitPrice) : 'Sold out'}
        </p>

        {isInCart && (
          <div className="flex items-center justify-between">
            <UpdateItemQuantity />
            <DeleteItem burgerId={id} />
          </div>
        )}
        {!soldOut && !isInCart && (
          <Button
            className="mt-10 uppercase transition-all duration-300 ease-in-out hover:scale-105"
            shape="pill"
            onClick={handleAddtoCart}
          >
            Add to cart
          </Button>
        )}
      </div>
    </li>
  );
}

export default MenuItem;
