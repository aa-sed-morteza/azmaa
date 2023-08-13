import { createSlice } from "@reduxjs/toolkit";

export const BlogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    postList: [],
    postData: {},
  },
  reducers: {
    setAllPosts: (state, actions) => {
      state.postList = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllPosts } = BlogSlice.actions;

export default BlogSlice.reducer;
