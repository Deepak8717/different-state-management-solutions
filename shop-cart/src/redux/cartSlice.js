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
          //if item exist
          if (item.id === actions.payload.id) {
            doesItemExist = true;
            item.quantity++;
          }
        });
        //if item doesn't exit push
        if (!doesItemExist) {
          const product = { ...actions.payload, quantity: 1 };
          state.cartItems = [...state.cartItems, product];
        }
      } else {
        //first time
        const product = { ...actions.payload, quantity: 1 };
        state.cartItems = [...state.cartItems, product];
      }
      state.totalAmount += actions.payload.price;
      console.log(state.totalAmount);
    },
    removeFromCart: (state, actions) => {
      state.cartItems = state.cartItems.filter((item) => {
        return item.id !== actions.payload.id;
      });
      state.totalAmount -= actions.payload.quantity * actions.payload.price;
    },
    addItemQuantity: () => {
      console.log("Quanty added");
    },
    subtractItemQuantity: () => {
      console.log("Item Quantity substracted");
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.totalAmount = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  addItemQuantity,
  subtractItemQuantity,
  clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;
