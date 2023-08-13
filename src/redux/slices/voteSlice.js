import { createSlice } from "@reduxjs/toolkit";

export const VoteSlice = createSlice({
  name: "voteSlice",
  initialState: {
    voteList: [],
    voteData: {},
  },
  reducers: {
    setAllVotes: (state, actions) => {
      state.voteList = actions.payload;
    },
    setVoteData: (state, actions) => {
      state.voteData = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllVotes, setVoteData } = VoteSlice.actions;

export default VoteSlice.reducer;
