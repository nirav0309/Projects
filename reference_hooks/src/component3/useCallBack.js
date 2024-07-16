import React, { useState, useCallback, useRef } from "react";
import { MemoHigherOrder } from "./todo";
// import { flushSync } from "react-dom"; 
// import ExampleTodos from "./todo";

const UseCallBackExample = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const lastTodo = useRef(null);

    
    const addTodos = useCallback(() => {
      setTodos((prev) => [...prev, `Todo ${prev.length + 1}`]); //using useCallBack
    }, [setTodos]);

  //   const addTodos = () => {
  //     setTodos((prev) => [...prev, `Todos ${prev.length + 1}`]); //without useCallBack
  //   };

  const handleClick = () => {
    setCount(count + 1);
  };

  // const addTodos = useCallback(() => {
  //   flushSync(() => {
  //     setTodos((prev) => [...prev, `Todos ${prev.length + 1}`]); //using useCallBack and flushSync api
  //   });
  //   if (lastTodo.current) {
  //     lastTodo.current.scrollIntoView({
  //       behavior: "smooth",
  //     });
  //   }
  // }, [setTodos]);

  return (
    <>
      {/* <ExampleTodos todos={todos} addTodos={addTodos} lastTodo={lastTodo} />{" "} */}
          
      <button onClick={handleClick}>Count {count}</button>
      <br />
      <MemoHigherOrder todos={todos} addTodos={addTodos} lastTodo={lastTodo} />{" "}
    </>
  );
};

export { UseCallBackExample };
