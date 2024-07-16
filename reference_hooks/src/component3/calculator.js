import { useRef, useState } from "react";

const CalculatorApp = () => {
  const inputRef = useRef(null);
  const resultRef = useRef(null);
  const [result, setResult] = useState(0);

  const plus = (e) => {
    e.preventDefault();
    setResult((res) => res + Number(inputRef.current.value));
  };
  const minus = (e) => {
    e.preventDefault();
    setResult((res) => res - Number(inputRef.current.value));
  };
  const times = (e) => {
    e.preventDefault();
    setResult((res) => res * Number(inputRef.current.value));
  };
  const divide = (e) => {
    e.preventDefault();
    setResult((res) => res / Number(inputRef.current.value));
  };
  const resetInput = (e) => {
    e.preventDefault();
    inputRef.current.value = 0;
  };
  const resetResult = (e) => {
    e.preventDefault();
    setResult((prev) => prev * 0);
  };
  return (
    <div>
      <div>
        <h1>Simple Calculator</h1>
      </div>
      <form action="">
        <p ref={resultRef}>{result}</p>
        <input
          type="number"
          pattern="[0-9]"
          ref={inputRef}
          placeholder="Type a number"
        /> <br />
        <button onClick={plus}>Add</button>
        <button onClick={minus}>Minus</button>
        <button onClick={times}>Times</button>
        <button onClick={divide}>Divide</button>
        <button onClick={resetInput}>Reset Input</button>
        <button onClick={resetResult}>Reset Result</button>
      </form>
    </div>
  );
};

export { CalculatorApp };
