import { createSlice } from "@reduxjs/toolkit";

export const activityChoiceSlice = createSlice({
  name: "activityChoice",
  initialState: {
    activity: "",
  },
  reducers: {
    setActivity(state, action) {
      state.islogin = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setActivity } = activityChoiceSlice.actions;

export default activityChoiceSlice.reducer;
