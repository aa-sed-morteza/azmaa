import { createSlice } from "@reduxjs/toolkit";

export const BlogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    postList: [],
    postData: {},
    isBlogLoaded: false,
  },
  reducers: {
    setAllPosts: (state, actions) => {
      state.postList = actions.payload;
    },
    setBlogIsLoaded: (state, actions) => {
      state.isBlogLoaded = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAllPosts, setBlogIsLoaded } = BlogSlice.actions;

export default BlogSlice.reducer;
