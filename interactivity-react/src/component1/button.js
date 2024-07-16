import { useState } from "react";

const Button = ({ handleOnClick, children }) => {
  return (
    <>
      <button onClick={handleOnClick}>{children}</button>
    </>
  );
};

const Button1 = ({ onSmash }) => {
  return <button onClick={onSmash}>click me</button>;
};

//propagation
const Button3 = () => {
  return (
    <div onClick={() => alert("this is the alert of the parent")}>
      {/* onClickCapture trigger div's onClick event then button and without capture it trigger button onClick event */}

      <button onClick={() => alert("hello")}>Propagation</button>
    </div>
  );
};

// stop propagation
const Button4 = ({ onClickHandle }) => {
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          onClickHandle();
        }}
      >
        Click me
      </button>
    </>
  );
};

const EventPrevent = () => {
  const [value, setValue] = useState("");
  const handleXyz = () => {
    alert(value)
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert("submitting");
      }}
    >
      <input value={value} onChange={handleChange} />{' '}
      {/* <input  onChange={handleChange} />{' '} */}
      <button onClick={handleXyz}> send</button>
    </form>
  );
};
export { Button, Button1, Button3, Button4, EventPrevent };
