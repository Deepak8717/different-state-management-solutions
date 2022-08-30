import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { addToDo, deleteTodo } from "./todoSlice";
import { useState } from "react";
function App() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const [todoInput, setTodoInput] = useState("");
  const handleClick = (e) => {
    setTodoInput(e.target.value);
  };
  return (
    <div className="App">
      <input type="text" value={todoInput} onChange={handleClick} />
      <h1>Hello</h1>
      <button
        onClick={() => {
          dispatch(addToDo(todoInput));
          setTodoInput("");
        }}
      >
        Add todo
      </button>
      {todos.map((todo, i) => {
        return (
          <div key={i} className="todo">
            {todo.task}
            <button
              className="exit-btn"
              onClick={() => dispatch(deleteTodo(todo.id))}
            >
              X
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default App;
