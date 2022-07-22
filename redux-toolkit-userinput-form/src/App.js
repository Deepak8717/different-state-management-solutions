import { Provider } from "react-redux";
import store from "./modules";
import UserInfo from "./components/UserInfo";
import Input from "./components/Input";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h2>App</h2>
        <UserInfo />
        <Input />
      </div>
      ;
    </Provider>
  );
}

export default App;
