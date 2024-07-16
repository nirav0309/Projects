import "./App.css";
import { Button3 } from "./component1/button";
import { EventPreventHandle, StopPropagation, Toolbar, Toolbar1 } from "./component1/buttontoolbar";
import { DataRender } from "./component2/datarender";
import { MoveableCursor } from "./component3/moveoncursor";
import { ObjectWithSpread } from "./component4/objectwithspread";
import { StateUpdate } from "./component5/stateupdate";
import { UpdateArray } from "./component6/updatearray";
import { ParentCheckbox } from "./component7/checkbox";

function App() {
  return (
    <>
      <div>
        <h3>Button event</h3>
        <Toolbar
          doSomething={() => alert("This is message on button click 1")}
          doSomething1={() => alert("This is message on button click 2")}
        />

        <Toolbar1 xyz="some text passed through the 'XYZ' PROPS" />
      </div>

      <div>
        <h3>image use and update state on click</h3>
        <DataRender />
      </div>
      
      <div>
        <h3>event propagation and stop propagation</h3>
        <Button3 />
        <StopPropagation/>
        <EventPreventHandle/>
      </div>

      <div>
        <h3>Moveable cursor</h3>
        <MoveableCursor/>
      </div>

      <div>
        <h3>Copying object with spread</h3>
        <ObjectWithSpread/>
      </div>

      <div>
        <h3>Update state value multiple times passing function arguments</h3>
        <StateUpdate/>
      </div>

      <div>
        <h3>Updating array in state</h3>
        <UpdateArray/>
      </div>
      
      <div>
        <h3>Checkbox</h3>
        <ParentCheckbox/>
      </div>
    </>
  );
}

export default App;
