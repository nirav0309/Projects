import { useState } from "react";

const ScoreBoard = () => {
  const [player, setPlayer] = useState(0);
  return (
    <>
      {player ? <Counter person="p2" /> : <Counter person="p1" />}

      {/* {player ? <Counter person="p1" key='p1'/> : <Counter person="p2" key='p2'/>}   */}

      {/* we can reset state using keys, like above  */}

      <button
        onClick={() => {
          setPlayer(!player);
        }}
      >
        next player
      </button>
    </>
  );
};

const Counter = ({ person }) => {
  const [count, setCount] = useState(0);
  return (
    <>
      <h1>
        {" "}
        {person}'s score: {count}
      </h1>
      <button onClick={() => setCount(count + 1)}>click</button>
    </>
  );
};

export { ScoreBoard };
