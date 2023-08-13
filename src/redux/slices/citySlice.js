import { createSlice } from "@reduxjs/toolkit";

export const CitySlice = createSlice({
  name: "envoySlice",
  initialState: {
    cityList: [],
    districtList: [],
  },
  reducers: {
    setAllCities: (state, actions) => {
      state.cityList = actions.payload;
    },
    setAllDistricts: (state, actions) => {
      state.districtList = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllCities, setAllDistricts } = CitySlice.actions;

export default CitySlice.reducer;
