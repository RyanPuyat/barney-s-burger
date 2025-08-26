import { createSlice } from '@reduxjs/toolkit';

let savedCart = [];
try {
  const stored = localStorage.getItem('cart');
  if (stored) savedCart = JSON.parse(stored);
} catch {
  savedCart = [];
}

const initialState = {
  cart: savedCart,
};

// in redux you can mutate state

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      //payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      //payload = burgerId
      state.cart = state.cart.filter(
        (item) => item.burgerId !== action.payload,
      );
    },
    increaseItemQuantity(state, action) {
      //payload = burgerId
      const item = state.cart.find((item) => item.burgerId === action.payload);

      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      //payload = burgerId
      const item = state.cart.find((item) => item.burgerId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;

      if (item.quantity === 0) cartSlice.caseReducers.deleteItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getTotalCartPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);

export const getCurrentQuantityById = (id) => (state) =>
  state.cart.cart.find((item) => item.burgerId === id)?.quantity ?? 0;
