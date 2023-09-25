import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const userTypeSlice = createSlice({
  name: "userType",
  initialState: {
    userType: "",
  },
  reducers: {
    setUserType(state, action) {
      state.userType = action.payload;
    },
  },
});

export const { setUserType } = userTypeSlice.actions;

export default userTypeSlice.reducer;
