import { createSlice } from "@reduxjs/toolkit";

export const addVoteLevelSlice = createSlice({
  name: "addVoteLevelSlice",
  initialState: {
    addVoteLevel: 1,
  },
  reducers: {
    setvotelevel(state , action) {
        state.addVoteLevel = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setvotelevel
} = addVoteLevelSlice.actions;

export default addVoteLevelSlice.reducer;