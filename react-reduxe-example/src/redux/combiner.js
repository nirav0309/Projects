import { combineReducers } from "redux";
import { colorReducer, counterReducer } from "./reducer";

const rootReducer = combineReducers({ color: colorReducer, counter: counterReducer })

export default rootReducer