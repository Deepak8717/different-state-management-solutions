import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, actions) => {
      const product = { ...actions.payload, quantity: 1 };
      state.cartItems = [...state.cartItems, product];
    },
    removeFromCart: () => {
      console.log("item removed");
    },
    addItemQuantity: () => {
      console.log("Quanty added");
    },
    substractItemQuantity: () => {
      console.log("Item Quantity substracted");
    },
    clearCart: () => {
      console.log("Cart cleared");
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  substractItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
