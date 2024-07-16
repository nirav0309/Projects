import { useState } from "react";
const StateUpdate = () => {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(0);
  return (
    <>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        click
      </button>

        <h1>{count1}</h1>
      <button
        onClick={() => {
          setCount1(count => count + 1);
          setCount1(count => count + 1);
          setCount1(count => count + 1);
        }}
      >
        click
      </button>
    </>
  );
};
export { StateUpdate };
