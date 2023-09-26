import { createSlice } from "@reduxjs/toolkit";

export const setContentArticleSlice = createSlice({
  name: "setContentArticleSlice",
  initialState: {
    contentArticle: {},
  },
  reducers: {
    setcontentArticle(state , action) {
        state.contentArticle = action.payload 
    }
    }
});


// Action creators are generated for each case reducer function
export const {
    setcontentArticle
} = setContentArticleSlice.actions;

export default setContentArticleSlice.reducer;