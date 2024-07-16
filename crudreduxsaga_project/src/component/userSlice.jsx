import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    users: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchUserRequest: (state) => {
      state.loading = true;
    },
    fetchUserSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addUserRequest: (state) => {
      state.loading = true;
    },
    addUserSuccess: (state, action) => {
      state.loading = false;
      state.users.push(action.payload);
    },
    addUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteUserRequest: (state) => {
      state.loading = true;
    },
    deleteUserSuccess: (state, action) => {
      state.loading = false;
      state.users = state.users.filter((e) => e.id !== action.payload.id);
    },
    deleteUserFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    editUserRequest: (state) => {
      state.loading = true;
    },
    editUserSuccess: (state, action) => {
      state.loading = false;
      state.users = state.users.map((e) =>
        e.id === action.payload.id ? action.payload : e
      );
    },
    editUserFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchUserRequest,
  fetchUserSuccess,
  fetchUserFailure,
  addUserRequest,
  addUserSuccess,
  addUserFailure,
  deleteUserRequest,
  deleteUserSuccess,
  deleteUserFailure,
  editUserRequest,
  editUserSuccess,
  editUserFailure,
} = userSlice.actions;
export default userSlice.reducer;



//---------------------------------------------------------------------------------------------------------------------------

// import { createSlice } from "@reduxjs/toolkit";
// const userSlice = createSlice({
//     name: "user",
//     initialState: {
//         users: [],
//     },
//     reducers: {
//         fetchUser: (state, action) => { 
//             state.users = action.payload  
//         },
//         addUser: (state, action) => { 
//             state.users.push(action.payload)
//         },
//         deleteUser: (state, action) => { 
//             state.users = state.users.filter((e) => e.id !== action.payload.id)
//         },
//         editUser: (state, action) => {
//             state.users = state.users.map((e) => e.id === action.payload.id ? action.payload : e)
//         }
//     }
// })

// export const {fetchUser, addUser, deleteUser, editUser } = userSlice.actions;
// export default userSlice.reducer;