import { createSlice } from "@reduxjs/toolkit";

export const setImageSlice = createSlice({
  name: "setImageSlice",
  initialState: {
    image: "",
  },
  reducers: {
    setimage(state , action) {
        state.image = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setimage
} = setImageSlice.actions;

export default setImageSlice.reducer;