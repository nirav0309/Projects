import { useDebugValue, useState } from "react";

const useCounter = () => {
  const [count, setCount] = useState(0);

    //we are using DebugValue to provide label to react devtool
    useDebugValue(count > 5 ? "High count" : "Low  count");
    
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return { count, increment, decrement };
};

const Counter = () => {
  const { count, increment, decrement } = useCounter(0);
  return (
    <>
      <p>Count {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Increment</button>
    </>
  );
};
export { Counter };
