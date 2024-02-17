import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const setIdSlice = createSlice({
  name: "setID",
  initialState: {
    id: 0,
  },
  reducers: {
    setID(state, action) {
      state.id = action.payload;
      console.log(state.id)
    },
  },
});

export const { setID } = setIdSlice.actions;

export default setIdSlice.reducer;
