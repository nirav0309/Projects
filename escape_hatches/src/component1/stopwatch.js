import { useState, useRef } from "react";
const StopWatch = () => {
  const [start, setStart] = useState(null);
  const [now, setNow] = useState(null);
  const [value, setValue] = useState(false);
  let ref = useRef(null);

  // for two buttons
  const handleStart = () => {
    setStart(Date.now());
    setNow(Date.now());

    // clearInterval(ref.current);
    ref.current = setInterval(() => {
      setNow(Date.now());
    }, 10);

    setValue(!value);
  };
  const handleStop = () => {
    clearInterval(ref.current);
  };

  const handleResume = () => {
    ref.current = setInterval(() => {
      setNow((now) => now + 1);
    }, 10);
  };


  // const handleStart = () => {
  //   if (value) {
  //     setValue(false);
  //     clearInterval(ref.current);
  //   } else {
  //     setStart(Date.now());
  //     setNow(Date.now());
  //     ref.current = setInterval(() => {
  //       setNow(Date.now());
  //     }, 10);
  //     setValue(!value);
  //   }
  // };

  
  //to display seconds
  let seconds = 0;
  if (start !== null && now !== null) {
    seconds = (now - start) / 1000;
  }
  return (
    <>
      <h2>Time: {seconds.toFixed(3)}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <button onClick={handleResume}>Resume</button>
      {/* above with two buttons */}

      {/* <button onClick={handleStart}>{value ? "pause" : "play"}</button> */}
    </>
  );
};

export { StopWatch };
