import { createSlice } from "@reduxjs/toolkit";

export const EnvoySlice = createSlice({
  name: "envoySlice",
  initialState: {
    envoyLists: [],
    envoyData: {
      firstName: "",
      lastName: "",
    },
  },
  reducers: {
    setAllEnvoys: (state, actions) => {
      state.envoyLists = actions.payload;
    },
    setEnvoyData: (state, actions) => {
      state.envoyData = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMessage } = EnvoySlice.actions;

export default EnvoySlice.reducer;
