import { createSlice } from "@reduxjs/toolkit";

export const ActionSlice = createSlice({
  name: "actionSlice",
  initialState: {
    actionList: [],
    actionData: {},
  },
  reducers: {
    setAllActions: (state, actions) => {
      state.actionList = actions.payload;
    },
    setActionData: (state, actions) => {
      state.actionData = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMessage } = ActionSlice.actions;

export default ActionSlice.reducer;
