import { useState } from "react";


export function UseStateEx1() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  function handleClick1() {
    setCount(count - 1);
  }

  return (
    <>
      <button onClick={handleClick}>Clicked {count}</button>
      <h1>{count}</h1>
      <button onClick={handleClick1}>Clicked </button>
    </>
  );
}

export function UseStateEx2() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={handleClick}>Clicked {count}</button>
      <h1>{count}</h1>
      <button>Clicked {count}</button>
      <h1>{count}</h1>
      
    </>
  );
}



