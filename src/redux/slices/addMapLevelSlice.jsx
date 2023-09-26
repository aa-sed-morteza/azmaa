import { createSlice } from "@reduxjs/toolkit";

export const addMapLevelSlice = createSlice({
  name: "addMapLevelSlice",
  initialState: {
    mapLevel: 1,
  },
  reducers: {
    setmaplevel(state , action) {
        state.mapLevel = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setmaplevel
} = addMapLevelSlice.actions;

export default addMapLevelSlice.reducer;