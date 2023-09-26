import { createSlice } from "@reduxjs/toolkit";

export const addSuggestLevelSlice = createSlice({
  name: "addSuggestLevelSlice",
  initialState: {
    addSuggestLevel: 1,
  },
  reducers: {
    setSuggestLevel(state , action) {
        state.addSuggestLevel = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setSuggestLevel
} = addSuggestLevelSlice.actions;

export default addSuggestLevelSlice.reducer;