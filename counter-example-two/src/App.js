import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import {
  increment,
  decrement,
  incrementByAmount,
  decrementByAmount,
} from "./counterSlice";

function App() {
  const coin = useSelector((state) => state.counter.coin);
  const dispatch = useDispatch();
  const [inputAmount, setInputAmount] = useState(0);
  const handleOnChange = (e) => {
    setInputAmount(Number(e.target.value));
  };
  return (
    <div className="App">
      <div style={{ margin: "20px", fontWeight: "bold", fontSize: "35px" }}>
        {coin}
      </div>
      <button style={{ margin: "5px" }} onClick={() => dispatch(increment())}>
        Incrment
      </button>
      <button style={{ margin: "5px" }} onClick={() => dispatch(decrement())}>
        decrement
      </button>
      <div style={{ margin: "20px" }}>
        <input type="text" value={inputAmount} onChange={handleOnChange} />
        <button
          style={{ margin: "5px" }}
          onClick={() => dispatch(incrementByAmount(inputAmount))}
        >
          Increment
        </button>
        <button
          style={{ margin: "5px" }}
          onClick={() => dispatch(decrementByAmount(inputAmount))}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
