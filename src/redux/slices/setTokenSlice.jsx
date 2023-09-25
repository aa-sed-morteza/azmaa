import { createSlice } from "@reduxjs/toolkit";

export const setTokenSlice = createSlice({
  name: "setTokenSlice",
  initialState: {
    token: "",
  },
  reducers: {
    settoken(state , action) {

        state.token = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    settoken
} = setTokenSlice.actions;

export default setTokenSlice.reducer;