import { createSlice } from "@reduxjs/toolkit";
import { LikeArticleAPI, UnLikeArticleAPI } from "../../../api";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
  count: 1,
};
export const FavoriteSlice = createSlice({
  name: "favorite",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LikeArticleAPI.pending, (state, action) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(LikeArticleAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
      state.count = action.payload.article.favoritesCount;
      console.log(action.payload.article.favoritesCount);
    });
    builder.addCase(LikeArticleAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(UnLikeArticleAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(UnLikeArticleAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
      state.count = action.payload.article.favoritesCount;
    });
    builder.addCase(UnLikeArticleAPI.rejected, (state, action) => {
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
export default FavoriteSlice.reducer;
