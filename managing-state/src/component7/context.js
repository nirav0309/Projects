import { useState, createContext, useContext } from "react";

const UserContext = createContext();

const Compo1 = () => {
  const [text, setText] = useState("some text");

  return (
    <>
      <UserContext.Provider value={text}>
        <h4>Component1 {text}</h4>
        <Compo2 value={text} />
      </UserContext.Provider>
    </>
  );
};

const Compo2 = () => {
  return (
    <>
      <h4>Component2 </h4>
      <Compo3 />
    </>
  );
};

const Compo3 = () => {
  return (
    <>
      <h4>Component3</h4>
      <Compo4 />
    </>
  );
};
const Compo4 = () => {
  return (
    <>
      <h4>Component4</h4>
      <Compo5 />
    </>
  );
};
const Compo5 = () => {
  const textValue = useContext(UserContext);
  return (
    <>
      <h4>Component5 {textValue}</h4>
    </>
  );
};

export { Compo1 };
