import "./App.css";
import { ChangeColor } from "./features/changecolor";
import { Counter } from "./features/counter";

function App() {
  return (
    <div className="App">
      <Counter />
      <h1>ChangeColor</h1>
      <ChangeColor/>
    </div>
  );
}

export default App;
