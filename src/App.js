import "./App.css";
import Counter from "./components/Counter";

function App() {
  const message = "Hello World";

  return (
    <div className="App">
      <p>{message}</p>
      <Counter></Counter>
    </div>
  );
}

export default App;
