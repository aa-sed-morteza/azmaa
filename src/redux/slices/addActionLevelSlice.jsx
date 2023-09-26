import { createSlice } from "@reduxjs/toolkit";

export const addActionLevelSlice = createSlice({
  name: "addActionLevel",
  initialState: {
    addActionLevel: 1,
  },
  reducers: {
    setactionlevel(state , action) {
        state.addActionLevel = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setactionlevel
} = addActionLevelSlice.actions;

export default addActionLevelSlice.reducer;