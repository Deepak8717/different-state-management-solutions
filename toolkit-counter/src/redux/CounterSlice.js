import {createSlice} from "@reduxjs/toolkit"

//Create Slice combine the action, initialState, and reducer into 1 function

const counterSlice = createSlice({
    name:"Counter",
    initialState:{
        value:0,
        name:"Redux Toolkit Example"
    }, 
    reducers:{
        //Action increment
        increment:(state)=>{
            state.value +=1
        }, 
        decrement:(state)=>{
            state.value -= 1
        },
        incrementByAmount:(state, action)=>{
            console.log(action)
            state.value += parseInt(action.payload)
            
        }
    }
})

//Export actions
export const {increment, decrement, incrementByAmount} = counterSlice.actions

//Export reducer
export default counterSlice.reducer;