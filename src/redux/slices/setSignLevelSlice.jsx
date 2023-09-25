import { createSlice } from "@reduxjs/toolkit";

export const setSignLevelSlice = createSlice({
  name: "setSignLevelSlice",
  initialState: {
    signInLevel: 1 ,
  },
  reducers: {
    setsigninLevel(state , action) {
        state.signInLevel = action.payload ;
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setsigninLevel
} = setSignLevelSlice.actions;

export default setSignLevelSlice.reducer;