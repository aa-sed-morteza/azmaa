import { createSlice } from "@reduxjs/toolkit";

export const ActivitySlice = createSlice({
  name: "activitySlice",
  initialState: {
    activityList: [],
    activityData: {},
    activityListToShow: [],
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
  },
});

// Action creators are generated for each case reducer function
export const { setAllActivity, setActivityData, setActivityToShow } =
  ActivitySlice.actions;

export default ActivitySlice.reducer;
