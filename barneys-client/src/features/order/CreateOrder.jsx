import { useState } from 'react';
import { Form, redirect, useActionData, useNavigation } from 'react-router-dom';
import { createOrder } from '../../services/apiRestaurant';
import { formatCurrency } from '../../utils/helpers';
import { useSelector } from 'react-redux';
import { clearCart, getCart, getTotalCartPrice } from '../cart/cartSlice';
import Button from '../../ui/Button';
import EmptyCart from '../cart/EmptyCart';
import store from '../../store';

// https://uibakery.io/regex-library/phone-number
const isValidPhone = (str) =>
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/.test(
    str,
  );

function CreateOrder() {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting';

  const formErrors = useActionData();
  const [withPriority, setWithPriority] = useState(false);

  const username = useSelector((state) => state.user.username);
  const cart = useSelector(getCart);
  const totalCartPrice = useSelector(getTotalCartPrice);
  const PriorityFee = withPriority ? totalCartPrice * 0.2 : 0;
  const totalPrice = totalCartPrice + PriorityFee;

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-6 md:mx-50">
      <h2 className="mb-8 text-2xl font-bold tracking-widest">
        Ready to order? Let's go!
      </h2>

      <Form method="POST">
        <div className="mb-5 flex flex-col gap-2 sm:flex sm:flex-row sm:items-center">
          <label className="text-lg sm:basis-40">First Name</label>
          <input
            type="text"
            name="customer"
            defaultValue={username}
            required
            className="input grow"
          />
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex sm:flex-row sm:items-center">
          <label className="text-lg sm:basis-40">Phone number</label>
          <div className="grow">
            <input type="tel" name="phone" required className="input w-full" />
            {formErrors?.phone && (
              <p className="mt-2 rounded-md bg-red-200 p-2 text-xs tracking-widest text-red-700">
                {formErrors.phone}
              </p>
            )}
          </div>
        </div>

        <div className="mb-5 flex flex-col gap-2 sm:flex sm:flex-row sm:items-center">
          <label className="text-lg sm:basis-40">Address</label>
          <div className="grow">
            <input
              type="text"
              name="address"
              required
              className="input w-full"
            />
          </div>
        </div>

        <div className="mb-12 flex items-center gap-5">
          <input
            className="h-6 w-6 accent-orange-500 focus:ring focus:ring-orange-500 focus:ring-offset-2 focus:outline-none"
            type="checkbox"
            name="priority"
            id="priority"
            value={withPriority}
            onChange={(e) => setWithPriority(e.target.checked)}
          />
          <label htmlFor="priority" className="text-lg tracking-wider">
            Want to yo give your order priority?
          </label>
        </div>

        <div>
          <input type="hidden" name="cart" value={JSON.stringify(cart)} />
          <Button
            disabled={isSubmitting}
            shape="pill"
            className="uppercase transition-all duration-300 ease-in-out hover:scale-105"
          >
            {isSubmitting
              ? 'Placing order'
              : `Order now ${formatCurrency(totalPrice)}`}
          </Button>
        </div>
      </Form>
    </div>
  );
}

export async function action({ request }) {
  //formData() is a browser object
  const formData = await request.formData();

  //to convert the forData into real data
  const data = Object.fromEntries(formData);

  const cartPrice = JSON.parse(data.cart);
  const isPriority = data.priority === 'true';
  const orderPrice = cartPrice.reduce((sum, item) => sum + item.totalPrice, 0);
  const estimatedDelivery = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  const priorityPrice = Number((isPriority ? orderPrice * 0.2 : 0).toFixed(2));

  const order = {
    ...data,
    priority: isPriority,
    estimatedDelivery,
    cart: JSON.parse(data.cart),
    orderPrice: cartPrice.reduce((sum, item) => sum + item.totalPrice, 0),
    priorityPrice,
  };

  const errors = {};
  if (!isValidPhone(order.phone))
    errors.phone =
      'Phone number is invalid. Please enter a valid phone number.';

  // console.log(errors);
  if (Object.keys(errors).length > 0) return errors;

  const newOrder = await createOrder(order);

  store.dispatch(clearCart());

  return redirect(`/order/${newOrder.id}`);
  // return null;
}

export default CreateOrder;
