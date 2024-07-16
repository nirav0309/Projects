import { forwardRef, useRef } from "react";

const InputFocus = () => {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  function handleClick() {
    inputRef1.current.focus();
  }
  function handleClick1() {
    inputRef2.current.focus();
  }

  return (
    <>
      <h3>ref on jsx tag</h3>
      <input type="text" ref={inputRef1} />
      <button onClick={handleClick}>Click me</button> <br />
      <h3>ref on component</h3>
      <InputComponent ref={inputRef2} />
      <InputComponent ref={inputRef3} />
      <button onClick={handleClick1}>Focus the input</button>
    </>
  );
};

const InputComponent = forwardRef((props, ref) => {
  return (
    <>
      <input type="text" {...props} ref={ref} /> <br />
    </>
  );
});

export { InputFocus, InputComponent };
