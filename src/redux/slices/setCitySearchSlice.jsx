import { createSlice } from "@reduxjs/toolkit";

export const setCitySearchSlice = createSlice({
  name: "setCitySearchSlice",
  initialState: {
    citySearch: [],
  },
  reducers: {
    setcitySearch(state , action) {
        state.citySearch = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setcitySearch
} = setCitySearchSlice.actions;

export default setCitySearchSlice.reducer;