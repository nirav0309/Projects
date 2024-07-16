import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
    color: "black",
    data: "",
  },
  reducers: {
    increment: (state) => {
      console.log((state.value += 1));
    },
    decrement: (state) => {
      console.log((state.value -= 1));
    },

    add: (state, action) => {
      state.value += action.payload;
    },
    
    addString: (state, action) => {
      state.value = "hello";
    },

    red: (state) => {
      console.log((state.color = "red"));
    },
    
    green: (state) => {
      console.log((state.color = "green"));
    },
  },
});

export const { increment, decrement, red, add, addString, green } = counterSlice.actions;

export default counterSlice.reducer;
