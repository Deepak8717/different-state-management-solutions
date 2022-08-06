import {createSlice} from "@reduxjs/toolkit"

export const todoSlice = createSlice({
    name:"todo",
    initialState:{
        todos:[]
    },
    reducers:{
        addTodos:(state, action)=>{
            state.todos.push({
                id:Math.random(),
                todo:action.payload
            })
        },
        deleteTodos:(state,action)=>{
            state.todos = state.todos.filter((item)=>item.id !== action.payload.id)
        }
    }
});

export const {addTodos, deleteTodos} = todoSlice.actions; 
export default todoSlice.reducer;