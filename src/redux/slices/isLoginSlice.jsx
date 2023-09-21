import { createSlice } from "@reduxjs/toolkit";

export const isLoginSlice = createSlice({
  name: "isLoginSlice",
  initialState: {
    islogin: false ,
  },
  reducers: {
    login (state) {
        state.islogin = true
    } ,
    logout (state) {
        state.islogin = false
    }
  }
});

// Action creators are generated for each case reducer function
export const {
    login ,
    logout
} = isLoginSlice.actions;

export default isLoginSlice.reducer;