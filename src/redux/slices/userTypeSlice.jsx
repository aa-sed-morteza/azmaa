import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const userType = createSlice({
  name: "userType",
  initialState: {
    isSuperviser: "superviser",
  },
  reducers: {
    envoy(state) {
      state.isEnvoy = "envoy";
    },
    Superviser(state) {
      state.isSuperviser = "superviser";
    },
  },
});

export const { Superviser, envoy } = userType.actions;

export default userType.reducer;
