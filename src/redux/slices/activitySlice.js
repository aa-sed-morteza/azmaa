import { createSlice } from "@reduxjs/toolkit";

export const ActivitySlice = createSlice({
  name: "activitySlice",
  initialState: {
    activityList: [],
    activityData: {},
  },
  reducers: {
    setAllActivity: (state, actions) => {
      state.activityList = actions.payload;
    },
    setActivityData: (state, actions) => {
      state.activityData = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllActivity, setActivityData } = ActivitySlice.actions;

export default ActivitySlice.reducer;
