import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    totalAmount: 0,
  },
  reducers: {
    addToCart: (state, actions) => {
      let doesItemExist = false;
      if (state.cartItems.length > 0) {
        //second time onward
        state.cartItems.map((item) => {
          if (item.id === actions.payload.id) {
            doesItemExist = true;
            item.quantity++;
          }
        });
        //push only those item doesn't already exist
        if (!doesItemExist) {
          const product = { ...actions.payload, quantity: 1 };
          state.cartItems = [...state.cartItems, product];
        }
      } else {
        //first time
        const product = { ...actions.payload, quantity: 1 };
        state.cartItems = [...state.cartItems, product];
      }
      console.log(state.cartItems);
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
