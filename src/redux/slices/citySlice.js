import { createSlice } from "@reduxjs/toolkit";

export const CitySlice = createSlice({
  name: "envoySlice",
  initialState: {
    cityList: [],
    districtList: [],
    districtToShow: [],
    isCityLoaded: false,
    isDistrictLoaded: false,
  },
  reducers: {
    setAllCities: (state, actions) => {
      state.cityList = actions.payload;
    },
    setAllDistricts: (state, actions) => {
      state.districtList = actions.payload;
    },
    setDistrictToShow: (state, actions) => {
      state.districtToShow = actions.payload;
    },
    setCityIsLoaded: (state, actions) => {
      state.isCityLoaded = actions.payload;
    },
    setDistrictIsLoaded: (state, actions) => {
      state.isDistrictLoaded = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  setAllCities,
  setAllDistricts,
  setCityIsLoaded,
  setDistrictIsLoaded,
} = CitySlice.actions;

export default CitySlice.reducer;
