import { createSlice } from "@reduxjs/toolkit";

export const setSuggetTypeSlice = createSlice({
  name: "setSuggetTypeSlice",
  initialState: {
    suggestType: "",
  },
  reducers: {
    setSuggetType(state , action) {
        state.suggestType = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setSuggetType
} = setSuggetTypeSlice.actions;

export default setSuggetTypeSlice.reducer;