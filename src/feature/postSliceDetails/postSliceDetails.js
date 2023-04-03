import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPostComments, fetchPostDetails } from "../../api/posts";

const initialState = {
  post: {},
  comments: [],
  loading: true,
};
export const getPostsDetails = createAsyncThunk("post/fetch", async (id) => {
  const { data } = await fetchPostDetails(id);
  return data;
});

export const getPostsComments = createAsyncThunk(
  "post/comments",
  async (id) => {
    const { data } = await fetchPostComments(id);
    return data;
  }
);
const PostSliceDetails = createSlice({
  name: "post",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPostsDetails.pending, (state, action) => {
      state.loading = true;
      state.post = {};
    });
    builder.addCase(getPostsDetails.fulfilled, (state, action) => {
      state.post = action.payload;
    });
    builder.addCase(getPostsDetails.rejected, (state, action) => {
      console.log("something went wrong");
      console.log(action);
    });

    builder.addCase(getPostsComments.pending, (state, action) => {
      state.comments = [];
    });
    builder.addCase(getPostsComments.fulfilled, (state, action) => {
      state.loading = false;
      state.comments = action.payload;
    });
    builder.addCase(getPostsComments.rejected, (state, action) => {
      state.loading = false;
      console.log("something went wrong");
    });
  },
});

export default PostSliceDetails.reducer;
