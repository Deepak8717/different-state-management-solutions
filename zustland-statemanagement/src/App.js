
import './App.css';
import People from './People';
import Input from './Input'; 
import Counter from './Counter';
import MyPets from './MyPets';
function App() {
  return (
    <div className="App">
      <Input/>
      <People/>
      <Counter/>
      <br/>
      <MyPets />
    </div>
  );
}

export default App;
