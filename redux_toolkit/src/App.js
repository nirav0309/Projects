import { Provider } from "react-redux";
import "./App.css";
import { ChangeColor } from "./features/changecolor";
import { Counter } from "./features/counter";
import store, { persistor } from "./app/store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Counter />
          <h1>ChangeColor</h1>
          <ChangeColor />
        </PersistGate>
      </Provider>
    </div>
  );
}

export default App;
