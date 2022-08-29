import { createSlice } from "@reduxjs/toolkit";

const initialStateValues = {
  coin: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState: initialStateValues,
  reducers: {
    increment: (state) => {
      state.coin = state.coin + 1;
    },
    decrement: (state) => {
      state.coin = state.coin - 1;
    },
    incrementByAmount: (state, actions) => {
      state.coin = state.coin + actions.payload;
    },
    decrementByAmount: (state, actions) => {
      state.coin = state.coin - actions.payload;
    },
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
