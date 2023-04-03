import { configureStore } from "@reduxjs/toolkit";
import postsSlice from "./feature/PostsSlice/postSlice";
import postSliceDetails from "./feature/postSliceDetails/postSliceDetails";
const store = configureStore({
  reducer: {
    posts: postsSlice,
    postDetails: postSliceDetails,
  },
});

export default store;
