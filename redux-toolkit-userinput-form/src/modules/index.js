import { combineReducers, configureStore } from "@reduxjs/toolkit";

import userReducer from "./user";

const reducer = combineReducers({
  user: userReducer,
});

const store = configureStore({ reducer });
export default store;
