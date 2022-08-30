import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  total: 0,
  gifts: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      state.products = [...state.products, actions.payload];
    },
    reStartCart: (state) => {
      state.products = [];
    },
  },
});

export const { addToCart, reStartCart } = cartSlice.actions;

export default cartSlice.reducer;
