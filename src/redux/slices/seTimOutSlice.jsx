import { createSlice } from "@reduxjs/toolkit";

export const seTimOutSlice = createSlice({
  name: "seTimOutSlice",
  initialState: {
    istimeout: false ,
  },
  reducers: {
    timeout (state) {
        state.istimeout = true ;
    } ,
    notimeout (state) {
        state.istimeout = false ;
    } 
    }
});

// Action creators are generated for each case reducer function
export const {
    timeout ,
    notimeout
} = seTimOutSlice.actions;

export default seTimOutSlice.reducer;