// Test ID: IIDSAT

import { useFetcher, useLoaderData } from 'react-router-dom';
import { getOrder } from '../../services/apiRestaurant';
import {
  calcMinutesLeft,
  formatCurrency,
  formatDate,
} from '../../utils/helpers';
import OrderItem from './OrderItem';
import { useEffect } from 'react';
import UpdateOrder from './UpdateOrder';

// const order = {
//   id: 'ABCDEF',
//   customer: 'Jonas',
//   phone: '123456789',
//   address: 'Arroios, Lisbon , Portugal',
//   priority: true,
//   estimatedDelivery: '2027-04-25T10:00:00',
//   cart: [
//     {
//       pizzaId: 7,
//       name: 'Napoli',
//       quantity: 3,
//       unitPrice: 16,
//       totalPrice: 48,
//     },
//     {
//       pizzaId: 5,
//       name: 'Diavola',
//       quantity: 2,
//       unitPrice: 16,
//       totalPrice: 32,
//     },
//     {
//       pizzaId: 3,
//       name: 'Romana',
//       quantity: 1,
//       unitPrice: 15,
//       totalPrice: 15,
//     },
//   ],
//   position: '-9.000,38.000',
//   orderPrice: 95,
//   priorityPrice: 19,
// };

function Order() {
  // Everyone can search for all orders, so for privacy reasons we're gonna gonna exclude names or address, these are only for the restaurant staff
  const order = useLoaderData();

  const fetcher = useFetcher();

  useEffect(
    function () {
      if (!fetcher.data && fetcher.state === 'idle') fetcher.load('/menu');
    },
    [fetcher],
  );

  const {
    id,
    status,
    priority,
    priorityPrice,
    orderPrice,
    estimatedDelivery,
    cart,
  } = order;
  const deliveryIn = calcMinutesLeft(estimatedDelivery);

  return (
    <div className="mx-auto w-full max-w-[90%] space-y-8 px-4 py-6">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h2 className="text-2xl font-semibold">Order #{id} Status</h2>

        <div className="space-x-2">
          {priority && (
            <span className="rounded-full bg-orange-500 px-6 py-2 tracking-wide text-orange-100 uppercase">
              Priority
            </span>
          )}
          <span className="rounded-full bg-yellow-500 px-6 py-2 tracking-wide text-orange-100 uppercase">
            {status}Preparing order
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-2 rounded-md bg-orange-100 px-4 py-8">
        <p className="text-lg">
          {deliveryIn >= 0
            ? `Only ${calcMinutesLeft(estimatedDelivery)} minutes left 😃`
            : 'Order should have arrived'}
        </p>
        <p className="text-sm italic opacity-75">
          (Estimated delivery: {formatDate(estimatedDelivery)})
        </p>
      </div>

      <ul className="divide-y divide-stone-200 border-t border-b border-stone-200">
        {cart.map((item) => {
          const burger = fetcher.data?.find((el) => el.id === item.burgerId);
          const ingredients = burger?.ingredients ?? [];
          return (
            <OrderItem
              item={item}
              key={item.burgerId}
              isLoadingIngredients={fetcher.state === 'loading'}
              ingredients={ingredients}
            />
          );
        })}
      </ul>

      <div className="space-y-2 rounded-md bg-orange-100 px-4 py-7">
        <p className="text-lg">Price burger: {formatCurrency(orderPrice)}</p>
        {priority && (
          <p className="text-lg">
            Price priority: {formatCurrency(priorityPrice)}
          </p>
        )}
        <p className="text-lg font-semibold">
          To pay on delivery: {formatCurrency(orderPrice + priorityPrice)}
        </p>
      </div>
      {!priority && <UpdateOrder order={order} />}
    </div>
  );
}

export async function loader({ params }) {
  const order = getOrder(params.orderId);
  return order;
}

export default Order;
