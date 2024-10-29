import data from '../assets/data';
import { configureStore, createSlice } from '@reduxjs/toolkit';

export const menuSlice = createSlice({ name: 'menu', initialState: data.menu });
export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],
  reducers: {
    addToCart(state, action) {
      return [...state, action.payload];
    },
    removeFromCart(state, action) {
      return state.filter((el) => action.payload.id !== el.id);
    },
  },
});

export const store = configureStore({
  reducer: {
    menu: menuSlice.reducer,
    cart: cartSlice.reducer,
  },
});
