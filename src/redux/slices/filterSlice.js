import { createSlice } from "@reduxjs/toolkit";

export const FilterSlice = createSlice({
  name: "filterSlice",
  initialState: {
    isFilterActive: false,
    filteredProvince: [],
    filteredCities: [],
  },
  reducers: {
    setIsFilterActive: (state, actions) => {
      state.isFilterActive = actions.payload;
    },
    setFilteredProvince: (state, actions) => {
      state.filteredProvince = actions.payload;
    },
    setFilteredCities: (state, actions) => {
      state.filteredCities = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setFilteredProvince, setFilteredCities, setIsFilterActive } =
  FilterSlice.actions;

export default FilterSlice.reducer;
