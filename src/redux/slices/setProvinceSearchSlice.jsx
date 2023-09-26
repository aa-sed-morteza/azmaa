import { createSlice } from "@reduxjs/toolkit";

export const setProvinceSearchSlice = createSlice({
  name: "setProvinceSearchSlice",
  initialState: {
    provinceSearch: "",
  },
  reducers: {
    setprovinceSearch(state , action) {
        state.provinceSearch = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setprovinceSearch
} = setProvinceSearchSlice.actions;

export default setProvinceSearchSlice.reducer;