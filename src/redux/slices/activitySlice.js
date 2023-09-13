import { createSlice } from "@reduxjs/toolkit";

export const ActivitySlice = createSlice({
  name: "activitySlice",
  initialState: {
    activityList: [],
    activityData: {},
    activityListToShow: [],
    isActivityLoaded: false,
  },
  reducers: {
    setAllActivity: (state, actions) => {
      state.activityList = actions.payload;
    },
    setActivityData: (state, actions) => {
      state.activityData = actions.payload;
    },
    setActivityToShow: (state, actions) => {
      state.activityListToShow = actions.payload;
    },
    setActivityIsLoaded: (state, actions) => {
      state.isActivityLoaded = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAllActivity,
  setActivityData,
  setActivityToShow,
  setActivityIsLoaded,
} = ActivitySlice.actions;

export default ActivitySlice.reducer;
