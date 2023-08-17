import { createSlice } from "@reduxjs/toolkit";

export const GeneralSlice = createSlice({
  name: "generalSlice",
  initialState: {
    isFilterActive: false,
  },
  reducers: {
    setIsFilterActive: (state, actions) => {
      state.isFilterActive = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsFilterActive } = GeneralSlice.actions;

export default GeneralSlice.reducer;
