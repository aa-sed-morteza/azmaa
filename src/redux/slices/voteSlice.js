import { createSlice } from "@reduxjs/toolkit";

export const VoteSlice = createSlice({
  name: "voteSlice",
  initialState: {
    voteList: [],
    voteData: {},
    voteListToShow: [],
  },
  reducers: {
    setAllVotes: (state, actions) => {
      state.voteList = actions.payload;
    },
    setVoteData: (state, actions) => {
      state.voteData = actions.payload;
    },
    setVoteToShow: (state, actions) => {
      state.voteListToShow = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllVotes, setVoteData, setVoteToShow } = VoteSlice.actions;

export default VoteSlice.reducer;
