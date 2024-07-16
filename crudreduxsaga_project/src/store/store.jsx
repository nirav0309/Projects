import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userSlice from "../component/userSlice";
import userSaga from "../component/userSaga";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: {
    user: userSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(userSaga)

export default store;
