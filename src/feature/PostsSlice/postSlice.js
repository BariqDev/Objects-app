import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts, savePosts } from "../../api/posts";

const initialState = {
  posts: [],
  loading: true,
};
export const getPosts = createAsyncThunk("posts/fetch", async () => {
  const { data } = await fetchPosts();
  return data;
});

export const submitPost = createAsyncThunk("posts/submit", async () => {
  const { data } = await savePosts();
  return data;
});

const postsSlice = createSlice({
  name: "posts",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state, action) => {
      state.loading = true;
      state.posts = [];
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    });
    builder.addCase(getPosts.rejected, (state, action) => {
      state.loading = false;
      console.log("something went wrong");
    });

    builder.addCase(submitPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(submitPost.fulfilled, (state, action) => {
      state.loading = false;
      const { title, body } = action.meta.arg;
      state.posts = [
        {
          title,
          body,
          id: Math.random(),
        },
        ...state.posts,
      ];
    });
    builder.addCase(submitPost.rejected, (state, action) => {
      state.loading = false;
      console.log("something went wrong");
    });
  },
});

export default postsSlice.reducer;
