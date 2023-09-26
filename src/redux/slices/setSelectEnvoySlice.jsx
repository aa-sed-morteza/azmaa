import { createSlice } from "@reduxjs/toolkit";

export const setSelectEnvoySlice = createSlice({
  name: "setSelectEnvoySlice",
  initialState: {
    selectEnvoy: {},
  },
  reducers: {
    setselectEnvoy(state , action) {
        state.selectEnvoy = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
  setselectEnvoy
} = setSelectEnvoySlice.actions;

export default setSelectEnvoySlice.reducer;