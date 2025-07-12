import { formatCurrency } from '../../utils/helpers';
import Button from '../../ui/Button';

function MenuItem({ burger }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = burger;

  return (
    <li className="relative z-5 h-40 w-60 rounded-br-3xl bg-gray-50 shadow-lg sm:mx-auto">
      <img
        src={imageUrl}
        alt={name}
        className="absolute -bottom-5 left-8 w-32 -translate-x-1/2 object-cover transition-all duration-300 ease-in-out hover:scale-120"
      />

      <p className="mt-1 ml-4 text-xl font-semibold text-yellow-500">{name}</p>
      <div className="mt-2 ml-6 flex flex-col justify-between space-y-1 text-xs">
        <p className="ml-15 line-clamp-2 h-20 overflow-hidden p-1 tracking-wide text-ellipsis italic">
          {ingredients.join(', ')}
        </p>
        <p className="ml-[9rem] text-xl font-semibold text-orange-500">
          {!soldOut ? formatCurrency(unitPrice) : 'Sold out'}
        </p>
        <Button
          className="mt-10 uppercase transition-all duration-300 ease-in-out hover:scale-105"
          shape="pill"
        >
          Add to cart
        </Button>
      </div>
    </li>
  );
}

export default MenuItem;
