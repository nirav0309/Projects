import "./App.css";
import { MyForm } from "./component1/form";
import { UpdateItem } from "./component2/updateitem";
import Accordion, { SharingState } from "./component3/sharingstate";
import { ScoreBoard } from "./component4/resetting";
import { TaskApp } from "./component5/main";
import { Messenger } from "./component6/main";
import { Compo1 } from "./component7/context";
import { ThemeComponent, ThemeProvider } from "./component7/them";

let States = ["empty", "typing", "submitting", "success", "error"];

function App() {
  return (
    <div className="App">
      <div>
        <h1>Declarative Ul</h1>
        <h4>Capital Of India ?</h4>
        <MyForm />

        {States.map((e) => {
          return (
            <section key={e}>
              <p>different visual state of the form</p>
              <h5>{e}</h5>
              <MyForm status={e} />
            </section>
          );
        })}
      </div>

      <div>
        <h1>Value change and Choose</h1>
        <UpdateItem/>
      </div>

      <div>
        <h1>Sharing State between component</h1>
        <SharingState/>

        <Accordion/>
      </div>

      <div>
        <h3>Preserving and resetting state in component</h3>
        <ScoreBoard/>
      </div>

      <div>
        <h3>Resetting a form with a key </h3>
        <Messenger/>
      </div>

      <div>
        <h3>Add, Delete, Edit Using REDUCER</h3>
        <TaskApp/>
      </div>

      <div>
        <h3>useContext example</h3>
        <Compo1/>

        <h3>theme example</h3>
        <ThemeProvider>
          <ThemeComponent/>
        </ThemeProvider>
      </div>
    </div>
  );
}

export default App;

