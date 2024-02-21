import { createSlice } from "@reduxjs/toolkit";

export const CommisionSlice = createSlice ({
    name: "commision",
  initialState: {
    fraction: "",
  },
  reducers: {
    setFraction(state, action) {
      state.fraction = action.payload;
    },
  },
})
export const { setFraction } = CommisionSlice.actions;
export default CommisionSlice.reducer;