import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const counter = useSelector((state) => state);
  console.log(counter);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <h1>{counter.reducer.vehicle}</h1>
      <button onClick={() => dispatch({ type: "Car" })}>Car</button>
      <button onClick={() => dispatch({ type: "Bike" })}>Bike</button>
      <button onClick={() => dispatch({ type: "Bus" })}>Bus</button>
    </div>
  );
}

export default App;
