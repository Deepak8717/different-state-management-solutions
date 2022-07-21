import { combineReducers } from "redux";
import reducer from "./reducer/reducer";
import childReducer from "./reducer/childReducer";

const combineReducer = combineReducers({
  reducer,
  childReducer,
});

const rootReducer = (state, action) => {
  console.log("combine reudcer");
  if (action.type === "RESET_APP_STORE") {
    state = undefined;
  }
  return combineReducer(state, action);
};

export default rootReducer;
