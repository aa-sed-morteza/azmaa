import { createSlice } from "@reduxjs/toolkit";

export const setTypeArticleSlice = createSlice({
  name: "setTypeArticleSlice",
  initialState: {
    typeArticle: "",
  },
  reducers: {
    setArticleType(state , action) {
        state.typeArticle = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setArticleType
} = setTypeArticleSlice.actions;

export default setTypeArticleSlice.reducer;