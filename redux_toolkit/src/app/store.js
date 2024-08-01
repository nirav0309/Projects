import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../features/counterSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root", 
  storage
};
const persistedReducer = persistReducer(persistConfig, counterSlice);
const store = configureStore({
  reducer: {
    mySlice: persistedReducer,
  },
});

const persistor = persistStore(store);

export { persistor };

export default store;