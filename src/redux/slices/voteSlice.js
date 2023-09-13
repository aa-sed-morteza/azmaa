import { createSlice } from "@reduxjs/toolkit";

export const VoteSlice = createSlice({
  name: "voteSlice",
  initialState: {
    voteList: [],
    voteData: {},
    voteListToShow: [],
    isVoteLoaded: false,
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
    setVoteIsLoaded: (state, actions) => {
      state.isVoteLoaded = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllVotes, setVoteData, setVoteToShow, setVoteIsLoaded } =
  VoteSlice.actions;

export default VoteSlice.reducer;
