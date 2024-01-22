import { createSlice } from "@reduxjs/toolkit";
import { FavoriteArticlesAPI,CreateArticlesAPI, GetAllArticlesAPI,DeleteArticlesAPI,UpdateArticlesAPI,MyArticlesAPI,ArticlesFollowingAPI} from "../../../api";

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
    builder.addCase(ArticlesFollowingAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(ArticlesFollowingAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(ArticlesFollowingAPI.rejected, (state, action) => {
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
    builder.addCase(UpdateArticlesAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(UpdateArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(UpdateArticlesAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(MyArticlesAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(MyArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(MyArticlesAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(FavoriteArticlesAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(FavoriteArticlesAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(FavoriteArticlesAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
  },
});
export default ArticlesSlice.reducer;
