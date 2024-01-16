import { createSlice } from "@reduxjs/toolkit";
import { CreateArticlesAPI, GetAllArticlesAPI,DeleteArticlesAPI } from "../../../api";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
};
export const ArticlesSlice = createSlice({
  name: "articles",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(GetAllArticlesAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(GetAllArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(GetAllArticlesAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(CreateArticlesAPI.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(CreateArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data.articles.unshift(action.payload.article);
    });
    builder.addCase(CreateArticlesAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(DeleteArticlesAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(DeleteArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      const index = state.data.articles.findIndex(e => e.slug);
      state.data.articles.splice(index, 1);

    });
    builder.addCase(DeleteArticlesAPI.rejected, (state, action) => {
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
export default ArticlesSlice.reducer;
