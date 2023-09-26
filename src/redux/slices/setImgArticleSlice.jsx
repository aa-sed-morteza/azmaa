import { createSlice } from "@reduxjs/toolkit";

export const setImgArticleSlice = createSlice({
  name: "setImgArticleSlice",
  initialState: {
    imageArticle: {},
  },
  reducers: {
    setimgArticle(state , action) {
        state.imageArticle = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setimgArticle
} = setImgArticleSlice.actions;

export default setImgArticleSlice.reducer;