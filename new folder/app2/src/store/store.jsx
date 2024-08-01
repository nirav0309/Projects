import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

const store1 = configureStore({
  reducer: {
    counter: counterSlice,
  },
});

export default store1;
