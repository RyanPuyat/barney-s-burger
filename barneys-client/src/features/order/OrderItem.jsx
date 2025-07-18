import { formatCurrency } from '../../utils/helpers';

function OrderItem({ item, isLoadingIngredients, ingredients }) {
  const { quantity, name, totalPrice } = item;

  return (
    <li className="py-3">
      <div className="mx-5 flex items-center justify-between gap-4">
        <p>
          <span className="font-bold">{quantity}&times;</span> {name}
        </p>
        <p className="font-bold">{formatCurrency(totalPrice)}</p>
      </div>
      <p className="mx-5 mt-2 text-sm text-stone-500 capitalize italic opacity-75">
        {isLoadingIngredients
          ? 'Loading. . . '
          : Array.isArray(ingredients)
            ? ingredients.join(', ')
            : 'No ingredients'}
      </p>
    </li>
  );
}

export default OrderItem;
