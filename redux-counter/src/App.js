import { connect } from "react-redux";
import addCounter from "./action";
import "./App.css";

function App(props) {
  return (
    <div className="App">
      <div>{props.counter}</div>
      <button onClick={props.addCounter}>Add One</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return { counter: state.counter };
};
const mapDispatchToProps = {
  addCounter,
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
