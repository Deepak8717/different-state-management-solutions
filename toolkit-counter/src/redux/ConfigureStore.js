import {combineReducers,configureStore} from "@reduxjs/toolkit"
import counterReducer from "./CounterSlice"

//Combine Reducer
const reducer = combineReducers({
    counter:counterReducer
});

//Create store equivalent
const store = configureStore({
    reducer,
})

export default store;