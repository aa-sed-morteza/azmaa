import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const userTypeSlice = createSlice({
  name: "userType",
  initialState: {
    superviser: "superviser",
  },
  reducers: {
    envoy(state) {
      state.envoy = "parliament_member";
    },
    Superviser(state) {
      state.superviser = "superviser";
    },
  },
});

export const { Superviser, envoy } = userTypeSlice.actions;

export default userTypeSlice.reducer;
