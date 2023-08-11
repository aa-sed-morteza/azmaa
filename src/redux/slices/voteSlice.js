import { createSlice } from "@reduxjs/toolkit";

export const VoteSlice = createSlice({
  name: "voteSlice",
  initialState: {
    voteLists: [],
    voteData: {},
  },
  reducers: {
    setAllVOtes: (state, actions) => {
      state.voteLists = actions.payload;
    },
    setVoteData: (state, actions) => {
      state.voteData = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMessage } = VoteSlice.actions;

export default VoteSlice.reducer;
