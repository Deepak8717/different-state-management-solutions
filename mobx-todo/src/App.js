import "./App.css";
import { useLocalStore, useObserver } from "mobx-react";
import { createContext, useContext, useState } from "react";
const StoreContext = createContext();

const StoreProvider = ({ children }) => {
  //mobx app state
  const store = useLocalStore(() => ({
    bugs: ["xyz"],

    addBug: (bug) => {
      store.bugs.push(bug);
    },
    get bugsCount() {
      return this.bugs.length;
    },
  }));
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

const BugList = () => {
  const store = useContext(StoreContext);
  return useObserver(() => {
    return (
      <ul>
        {store.bugs.map((bug, index) => (
          <li key={index}>{bug}</li>
        ))}
      </ul>
    );
  });
};

const BugHeader = () => {
  const store = useContext(StoreContext);
  return useObserver(() => {
    return (
      <header>
        <h1>{store.bugsCount} Bugs</h1>
      </header>
    );
  });
};

const BugsForm = () => {
  const store = useContext(StoreContext);
  const [bug, setBug] = useState("");
  const submit = (e) => {
    e.preventDefault();
    store.addBug(bug);
    setBug("");
  };
  return (
    <form onSubmit={submit}>
      <input type="text" onChange={(e) => setBug(e.target.value)} value={bug} />
      <button type="sumit">add</button>
    </form>
  );
};
function App() {
  return (
    <div className="App">
      <StoreProvider>
        <main>
          <BugHeader />
          <BugList />
          <BugsForm />
        </main>
      </StoreProvider>
    </div>
  );
}

export default App;
