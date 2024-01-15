import { createSlice } from "@reduxjs/toolkit";
import { LoginAPI } from "../../../api";

const initialState = {
  data: null,
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
};
export const LoginSlice = createSlice({
  name: "login",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(LoginAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.data =null;
      state.message = "pending...";
    });
    builder.addCase(LoginAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(LoginAPI.rejected, (state, action) => {
      state.data = [];
      state.isLoading = false;
      state.error = true;
      state.message = "Error";
    });
  },
});
export default LoginSlice.reducer;
