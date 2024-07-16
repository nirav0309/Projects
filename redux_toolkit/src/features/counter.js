import { useDispatch, useSelector } from "react-redux";
import { add, addString, decrement, increment } from "./counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.mySlice.value);
  const dispatch = useDispatch();
  return (
    <div className="counter"> 
      <h3>Official site react-redux</h3>
      <span> Count: {count}</span> <br />
      <button
        aria-label="Increment value"
        onClick={() => dispatch(increment())}
      >
        Increment
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(decrement())}
      >
        Decrement
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(add(10))}
      >
        Add By 10
      </button>
      <button
        aria-label="Decrement value"
        onClick={() => dispatch(addString())}
      >
        Add String
      </button>
      
    </div>
  );
};

export { Counter };
