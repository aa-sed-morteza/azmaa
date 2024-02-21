import { createSlice } from "@reduxjs/toolkit";
import React from "react";

export const setIdSlice = createSlice({
  name: "setID",
  initialState: {
    id: 0,
    experiences:""
  },
  reducers: {
    setID(state, action) {
      state.id = action.payload;
      console.log(state.id)
    },
    setExperience(state,action){
      state.experiences = action.payload;
    }
  },
});

export const { setID, setExperience } = setIdSlice.actions;

export default setIdSlice.reducer;
