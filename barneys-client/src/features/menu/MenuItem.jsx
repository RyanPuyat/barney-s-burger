import { formatCurrency } from '../../utils/helpers';

function MenuItem({ burger }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = burger;

  return (
    <li className="relative h-40 w-60 rounded-br-3xl bg-gray-50 shadow-lg sm:mx-auto">
      <img
        src={imageUrl}
        alt={name}
        className="absolute -bottom-5 left-8 w-32 -translate-x-1/2 object-cover"
      />
      <div>
        <p>{name}</p>
        <p>{ingredients.join(', ')}</p>
        <div>
          {!soldOut ? <p>{formatCurrency(unitPrice)}</p> : <p>Sold out</p>}
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
