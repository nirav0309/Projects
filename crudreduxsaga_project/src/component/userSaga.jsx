import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  addUserFailure,
  addUserRequest,
  addUserSuccess,
  deleteUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  editUserFailure,
  editUserRequest,
  editUserSuccess,
  fetchUserFailure,
  fetchUserRequest,
  fetchUserSuccess,
} from "./userSlice";


const URL = axios.create({ baseURL: "http://localhost:3069" });

function* fetchUsers() {
  try {
    const response = yield call(URL.get, "/users");
    yield put(fetchUserSuccess(response.data));
  } catch (error) {
    yield put(fetchUserFailure(error.message));
  }
}

function* addUsers(action) {
  try {
    const response = yield call(URL.post, "/users", action.payload);
    yield put(addUserSuccess(response.data));
  } catch (error) {
    yield put(addUserFailure(error.message));
  }
}

function* deleteUsers(action) {
  try {
    yield call(URL.delete, `/users/${action.payload}`);
    yield put(deleteUserSuccess(action.payload));
  } catch (error) {
    yield put(deleteUserFailure(error.message));
  }
}

function* editUsers(action) {
  try {
    const response = yield call(
      URL.put,
      `/users/${action.payload.id}`,
      action.payload
    );
    yield put(editUserSuccess(response.data));
  } catch (error) {
    yield put(editUserFailure(error.message));
  }
}

function* userSaga() {
  yield takeEvery(fetchUserRequest.type, fetchUsers);
  yield takeEvery(addUserRequest.type, addUsers);
  yield takeEvery(deleteUserRequest.type, deleteUsers);
  yield takeEvery(editUserRequest.type, editUsers);
}

export default userSaga;

//-------------------------------------------------------------

// import axios from "axios";
// import { fetchUser } from "./userSlice";
// import { call, put, takeEvery } from "redux-saga/effects";

// const URL = axios.create({ baseURL: "http://localhost:3069" });

// function* fetchUsers() {
//   try {
//     const response = yield call(URL.get, "/users");
//     yield put(fetchUser(response.data));
//   } catch (error) {
//     console.log(error.message)
//   }
// }

// function* userSaga() {
//     yield takeEvery(fetchUser.type, fetchUsers);
// }

// export default userSaga;