import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
  password: "",
};

export const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.email = action.payload.inputEmail;
      state.password = action.payload.inputPassword;
    },
    userLogout: (state, action) => {
      state.email = "";
      state.password = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { userLogin, userLogout } = loginSlice.actions;

export default loginSlice.reducer;
