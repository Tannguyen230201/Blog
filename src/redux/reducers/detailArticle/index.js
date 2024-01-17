import { createSlice } from "@reduxjs/toolkit";
import {DetailArticleAPI} from "../../../api";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
};
export const DetailArticleSlice = createSlice({
  name: "detail_article",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(DetailArticleAPI.pending, (state) => {
        state.isLoading = true;
        state.isSuccess = false;
        state.message = "pending...";
      });
      builder.addCase(DetailArticleAPI.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.data = action.payload;
      });
      builder.addCase(DetailArticleAPI.rejected, (state, action) => {
        state.isLoading = true;
        state.error = true;
        state.message = "Error";
      });
    
  },
});
export default DetailArticleSlice.reducer;
