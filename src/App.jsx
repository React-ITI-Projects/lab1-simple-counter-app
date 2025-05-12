import logo from "./logo.svg";
import "./App.css";
import CounterClass from "./components/CounterClass";
import CounterFun from "./components/CounterFun";

function App() {
  return (
    <div className="App">
      <CounterClass count={4} name="Alaa" />
      {/* <CounterFun count={4} name="Alaa" /> */}
    </div>
  );
}

export default App;
