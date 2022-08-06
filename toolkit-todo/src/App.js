import './App.css';
import AddTodos from "./components/AddTodos"
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="App">
      Hello
      <AddTodos/>
      <hr/>
      <TodoList />
    </div>
  );
}

export default App;
