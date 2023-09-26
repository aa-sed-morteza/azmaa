import { createSlice } from "@reduxjs/toolkit";

export const addArticleLevelSlice = createSlice({
  name: "addArticleLevelSlice",
  initialState: {
    addArticleLevel: 1,
  },
  reducers: {
    setArticleLevel(state , action) {
        state.addArticleLevel = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setArticleLevel
} = addArticleLevelSlice.actions;

export default addArticleLevelSlice.reducer;