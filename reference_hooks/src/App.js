import React from "react";
import { useActionState } from "./component1/useActionState.js";
import { addToCart } from "./component1/action.js";
import "./App.css";
import { UseCallBackExample } from "./component3/useCallBack.js";
import AppMy1, { ReactPlayerExample } from "./component3/reactplayer.js";
import { CalculatorApp } from "./component3/calculator.js";
import { ContextExample } from "./component4/context.js";
import { Counter } from "./component5/debug.js";
import { FilterApp } from "./component6/deferred.js";
import { MouseMove } from "./component7/mousemove.js";

function AddToCartForm({ itemID, itemTitle }) {
  const [formState, formAction] = useActionState(addToCart);

  return (
    <form onSubmit={formAction}>
      <h2>{itemTitle}</h2>
      <input type="hidden" name="itemID" value={itemID} />
      <button type="submit" disabled={formState.loading}>
        Add to Cart
      </button>
      {formState.loading && <div>Loading...</div>}
      {formState.success && (
        <div className="toast">
          Added to cart! Your cart now has {formState.cartSize} items.
        </div>
      )}
      {formState.success === false && (
        <div className="error">Failed to add to cart: {formState.error}</div>
      )}
    </form>
  );
}

export default function App() {
  return (
    <>
      <AddToCartForm itemID="1" itemTitle="UseActionState example " />
      <AddToCartForm itemID="2" itemTitle="UseActionState example" />

      <h1>Task: Add three Card elements</h1>
      <Card h2="First card's h2" h3="First card's h3" />
      <Card h2="Second card's h2" h3="Second card's h3" />
      <Card h2="Third card's h2" h3="Third card's h3" />

      <MathCompo />

      <h3>UseCallBack example</h3>
      <UseCallBackExample/>

      <h3>ReactPlayer example</h3>
      <ReactPlayerExample />
      <AppMy1 />
      
      <CalculatorApp /> 
      
      <h3>Context Example</h3>
      <ContextExample />

      <h3>useDebugValue Example</h3>
      <Counter />

      <h3>useDeferredValue Example</h3>
      <FilterApp />
      
      <h3>useEffect Example </h3>
      <MouseMove/>
    </>
  );
}

function Card(props) {
  return (
    <div className="card">
        <h2>{props.h2} </h2>
      <h3>{props.h3}</h3>
    </div>
  );
}

const MathCompo = () => {
  const handleClick = () => {
    let randomNum = Math.floor(Math.random() * 3) + 1;
    console.log(randomNum);
    let userInput = prompt("type a number");
    alert(`computer number, ${randomNum}, your number, ${userInput}`);
  };
  return (
    <>
      <h1>Task: Add a button and handle a click event</h1>
       {" "}
      <button onClick={handleClick}>Guess the number between 1 and 3</button>
    </>
  );
};
