import { useEffect, useRef, useState } from "react";
function Input({ shouldFocus }) {
  const ref = useRef(null);
  useEffect(() => {
    ref.current.focus();
  }, [shouldFocus]);
  return (
    <>
          {/* Enter Your First Name: <Inputval shouldFocus={true} />
      Enter Your Last Name: <Inputval shouldFocus={false} /> */}
          
          <input type="text" shouldFocus={true} placeholder="Some Text"  />
    </>
  );
}
// function Inputval({ ref }) {
//   return (
//     <>
//       <input placeholder="FirstName" type="text"></input>
//       <br></br>
//       <br></br>
//     </>
//   );
// }
function TwoFocus() {
  const [state, setState] = useState(false);
  return (
    <>
      <h1>Here are Two input field</h1>
      <button
        onClick={() => {
          setState(!state);
        }}
      >
        {state ? "Unmount" : "Mount"}
      </button>
      <br></br>
      <br></br>
      {state && <Input shouldFocus={true} />}
    </>
  );
}
export { TwoFocus };
