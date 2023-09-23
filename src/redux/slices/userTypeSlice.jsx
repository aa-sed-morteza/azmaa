import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const userType = createSlice({
  name: "userType",
  initialState: {
    isSuperviser: "superviser",
  },
  reducers: {
    envoy(state) {
      state.isParliament_member = "parliament_member";
    },
    Superviser(state) {
      state.isSuperviser = "superviser";
    },
  },
});

export const { Superviser, envoy } = userType.actions;

export default userType.reducer;
