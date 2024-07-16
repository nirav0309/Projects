import { Button, Button1, Button4, EventPrevent } from "./button";

const Toolbar = ({ doSomething, doSomething1 }) => {
  return (
    <>
      <Button handleOnClick={doSomething}>Do Something</Button>
      <Button handleOnClick={doSomething1}>Do Something1</Button> <br />
    </>
  );
};

const Toolbar1 = ({ xyz }) => {
  function handleOnClick() {
    alert(`this is alert and ${xyz}`);
  }
  return (
    <>
      <Button1 onSmash={handleOnClick} />
    </>
  );
};


const StopPropagation = () =>{
  return(
    <div onClick={() => alert("alert on div")}>
      <Button4 onClickHandle={() => alert("alert on button")}></Button4>
    </div>
  )
}

const EventPreventHandle = () =>{
  return (
    <>
      <EventPrevent/>
    </>
  )
}
export { Toolbar, Toolbar1, StopPropagation, EventPreventHandle };
