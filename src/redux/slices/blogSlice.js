import { createSlice } from "@reduxjs/toolkit";

export const BlogSlice = createSlice({
  name: "blogSlice",
  initialState: {
    envoyLists: [],
    envoyData: {
      firstName: "",
      lastName: "",
    },
  },
  reducers: {
    updateMessage: (state, actions) => {
      state.message = actions.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateMessage } = BlogSlice.actions;

export default BlogSlice.reducer;
