import { useState, useEffect } from "react";

const MountComponent = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "unmount" : "mount"} component
      </button>
      {show && <hr />}
      {show && <PlayGround />}
    </div>
  );
};

const PlayGround = () => {
  const [text, setText] = useState("some text");

  useEffect(() => {
    const OnTimeout = () => {
      console.log("⏰ " + text);
    };

    console.log('🔵 Schedule "' + text + '" log');
    const timeout = setTimeout(OnTimeout, 1000);

    return () => {
      console.log('🟡 Cancel "' + text + '" log');
      clearTimeout(timeout);
    };
  }, );
  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <h3>{text}</h3>
    </div>
  );
};

export { MountComponent };
