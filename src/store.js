import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./feature/PostsSlice/postSlice";
const store = configureStore({
  reducer: {
    posts: postsSlice,
  },
});

export default store;
