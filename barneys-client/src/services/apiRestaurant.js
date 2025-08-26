// const API_URL = 'http://localhost:5000/api';
import { loadStripe } from '@stripe/stripe-js';
const APIPRIMARY = import.meta.env.VITE_API_PRIMARY;
const APISECONDARY = import.meta.env.VITE_API_SECONDARY;
export const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_API_KEY);

export async function getMenu() {
  try {
    const res = await fetch(`${APIPRIMARY}/menu`);

    const { data } = await res.json();
    // console.log('PRIMARY', data);
    return data;
  } catch (error) {
    console.warn('Primary failed, trying secondary...');
    const backupRes = await fetch(`${APISECONDARY}/menu`);
    const { data } = await backupRes.json();
    // console.log('SECONDARY', data);
    if (!backupRes.ok) throw new Error('Both APIs failed', error);
    return data;
  }

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
}

export async function getOrder(id) {
  try {
    const res = await fetch(`${APIPRIMARY}/order/${id}`);
    const { data } = await res.json();
    // console.log('PRIMARY', data);
    return data;
  } catch (error) {
    const backupRes = await fetch(`${APISECONDARY}/order/${id}`);
    const { data } = await backupRes.json();
    // console.log('SECONDARY', data);
    if (!backupRes.ok) throw new Error('Both APIs failed', error);
    return data;
  }
}

export async function createOrder(order) {
  try {
    // console.log('📦 Sending order to backend:', order);

    const res = await fetch(`${APIPRIMARY}/order/create-checkout-session`, {
      method: 'POST',
      body: JSON.stringify(order),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    // if (!res.ok) throw Error('Stripe Checkout session failed');
    const { url } = await res.json();

    return url;
  } catch (error) {
    const backupRes = await fetch(
      `${APISECONDARY}/order/create-checkout-session`,
      {
        method: 'POST',
        body: JSON.stringify(order),
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    const { url } = await backupRes.json();
    if (!backupRes.ok) throw Error('Stripe Checkout session failed', error);
    return url;
  }
}

export async function updateOrder(id, updateObj) {
  try {
    const res = await fetch(`${APIPRIMARY}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (error) {
    const res = await fetch(`${APISECONDARY}/order/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updateObj),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!res.ok) throw Error();

    throw Error('Failed updating your order', error);
  }
}
