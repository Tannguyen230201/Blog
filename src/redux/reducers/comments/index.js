import { createSlice } from "@reduxjs/toolkit";
import { GetCommentsAPI ,PostCommentAPI,DeleteCommentAPI} from "../../../api";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
};
export const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetCommentsAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
      // state.data = [];
    });
    builder.addCase(GetCommentsAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetCommentsAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(PostCommentAPI.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(PostCommentAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data.comments.unshift(action.payload.comment);
    });
    builder.addCase(PostCommentAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(DeleteCommentAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(DeleteCommentAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const index = state.data.articles.findIndex(e => e.slug);
      state.data.articles.splice(index, 1);

    });
    builder.addCase(DeleteCommentAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    // builder.addCase(editSvApi.pending, (state) => {
    //   state.isLoading = true;
    //   state.isSuccess = false;
    //   state.message = "pending...";
    // });
    // builder.addCase(editSvApi.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.data = action.payload;
    // });
    // builder.addCase(editSvApi.rejected, (state, action) => {
    //   state.isLoading = true;
    //   state.error = true;
    //   state.message = "Error";
    // });
    
  },
});
export default CommentsSlice.reducer;
