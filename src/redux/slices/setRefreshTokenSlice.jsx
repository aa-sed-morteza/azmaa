import { createSlice } from "@reduxjs/toolkit";

export const setRefreshTokenSlice = createSlice({
  name: "setRefreshTokenSlice",
  initialState: {
    refreshTokenstate: null,
  },
  reducers: {
    setRefreshToken(state , action) {
        state.refreshTokenstate = action.payload ;
    }
    }
});


// Action creators are generated for each case reducer function
export const {
  setRefreshToken
} = setRefreshTokenSlice.actions;

export default setRefreshTokenSlice.reducer;