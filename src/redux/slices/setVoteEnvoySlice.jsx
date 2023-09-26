import { createSlice } from "@reduxjs/toolkit";

export const setVoteEnvoySlice = createSlice({
  name: "setVoteEnvoySlice",
  initialState: {
    voteEnvoy: "",
  },
  reducers: {
    setvoteEnvoy(state , action) {
        state.voteEnvoy = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setvoteEnvoy
} = setVoteEnvoySlice.actions;

export default setVoteEnvoySlice.reducer;