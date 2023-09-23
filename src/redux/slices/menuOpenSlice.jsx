import { createSlice } from "@reduxjs/toolkit";

export const menuOpenSlice = createSlice({
  name: "menuOpenSlice",
  initialState: {
    ismenuopen: false ,
  },
  reducers: {
    openmenu(state) {
        state.ismenuopen = true ;
    } ,
    closemenu (state) {
        state.ismenuopen = false ;
    } ,
    togglmenu (state) {
        state.ismenuopen = !state.ismenuopen
    }
  }
});

// Action creators are generated for each case reducer function
export const {
    openmenu ,
    closemenu ,
    togglmenu 
} = menuOpenSlice.actions;

export default menuOpenSlice.reducer;