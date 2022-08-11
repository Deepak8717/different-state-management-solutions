import './App.css';
import {useDispatch, useSelector} from "react-redux"
import {increment, decrement, incrementByAmount} from "./redux/CounterSlice"
import { useState } from 'react';

function App() {
  const [amount, setAmount] = useState(0)
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value);
  const increaseWithAmount=()=>{
    if(!isNaN((amount))){
      dispatch(incrementByAmount(amount))
    }
  }
  return (
    <div className="App">
     <h1>{count}</h1> 
     <button onClick={()=>dispatch(increment())}>increase</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input type="text" value={amount} onChange={(e)=>setAmount((e.target.value))} />
      <button onClick={increaseWithAmount}>Submit</button>
    </div>
  );
}

export default App
