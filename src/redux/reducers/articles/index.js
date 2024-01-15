import { createSlice } from "@reduxjs/toolkit";
import { GetAllArticlesAPI } from "../../../api";

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
    // builder.addCase(createSvApi.pending, (state, action) => {
    //   state.isLoading = true;
    //   state.isSuccess = false;
    //   state.message = "pending...";
    // });
    // builder.addCase(createSvApi.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   state.data.unshift(action.payload.data);
    //   console.log("data", action.payload.data);
    // });
    // builder.addCase(createSvApi.rejected, (state, action) => {
    //   state.data = [];
    //   state.isLoading = true;
    //   state.error = true;
    //   state.message = "Error";
    // });
    // builder.addCase(deleteAPI.pending, (state) => {
    //   state.isLoading = true;
    //   state.isSuccess = false;
    //   state.message = "pending...";
    // });
    // builder.addCase(deleteAPI.fulfilled, (state, action) => {
    //   state.isLoading = false;
    //   state.isSuccess = true;
    //   const index = state.data.findIndex(product => product.masv === action.payload.masv);
    //   state.data.splice(index, 1);

    // });
    // builder.addCase(deleteAPI.rejected, (state, action) => {
    //   state.isLoading = true;
    //   state.error = true;
    //   state.message = "Error";
    // });
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
