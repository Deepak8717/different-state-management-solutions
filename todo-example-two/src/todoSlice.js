import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState: initialState,
  reducers: {
    addToDo: (state, actions) => {
      state.todos.push({
        id: new Date().getTime(),
        task: actions.payload,
      });
      console.log(current(state.todos));
    },
    deleteTodo: (state, actions) => {
      state.todos = state.todos.filter((todo) => todo.id !== actions.payload);
    },
  },
});

export const { addToDo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
