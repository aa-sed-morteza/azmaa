import { createSlice } from "@reduxjs/toolkit";

export const EnvoySlice = createSlice({
  name: "envoySlice",
  initialState: {
    envoyList: [],
    envoyData: {
      firstName: "",
      lastName: "",
    },
    envoyListToShow: [],
  },
  reducers: {
    setAllEnvoys: (state, actions) => {
      state.envoyList = actions.payload;
    },
    setEnvoyData: (state, actions) => {
      state.envoyData = actions.payload;
    },
    setEnvoyToShow: (state, actions) => {
      state.envoyListToShow = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllEnvoys, setEnvoyData, setEnvoyToShow } =
  EnvoySlice.actions;

export default EnvoySlice.reducer;
