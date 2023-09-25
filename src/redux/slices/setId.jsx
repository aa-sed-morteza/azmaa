import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const setIdSlice = createSlice({
  name: "setID",
  initialState: {
    id: "",
  },
  reducers: {
    setID(state, action) {
      state.id = action.payload;
    },
  },
});

export const { setID } = setIdSlice.actions;

export default setIdSlice.reducer;
