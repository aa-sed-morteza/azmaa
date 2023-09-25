import { createSlice } from "@reduxjs/toolkit";

export const setPasswordSlice = createSlice({
  name: "setPasswordSlice",
  initialState: {
    password: "" ,
  },
  reducers: {
    setpassword(state , action) {
      console.log(action.payload);
        state.password = action.payload ;
        console.log(action.payload); 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setpassword
} = setPasswordSlice.actions;

export default setPasswordSlice.reducer;