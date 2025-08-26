import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CreateOrder, { action as actionCreateOrder } from './CreateOrder';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);

function StripeWrapper() {
  return (
    <Elements stripe={stripePromise}>
      <CreateOrder />
    </Elements>
  );
}

export const action = actionCreateOrder;
export default StripeWrapper;
