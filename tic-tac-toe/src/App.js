import "./App.css";
import TicTacToe from "./components/TicTacToe";

function App() {
  // return <TicTacToe />;
  const handleClick = () => {
    window.history.back();
  }
  return (
    <div>
      <h1>some content</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App;

