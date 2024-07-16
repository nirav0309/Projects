import { createStore } from "redux";
import { colorReducer, counterReducer } from "./reducer";
import rootReducer from "./combiner";


const store = createStore(
  // counterReducer,
  // colorReducer
  rootReducer
);
console.log(store.getState())
export { store };
