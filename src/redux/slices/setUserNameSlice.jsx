import { createSlice } from "@reduxjs/toolkit";

export const setUserNameSlice = createSlice({
  name: "setUserNameSlice",
  initialState: {
    username: "",
  },
  reducers: {
    setusername(state , action) {
        state.username = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setusername
} = setUserNameSlice.actions;

export default setUserNameSlice.reducer;