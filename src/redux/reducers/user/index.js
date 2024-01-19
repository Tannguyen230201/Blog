import { createSlice } from "@reduxjs/toolkit";
import { PersonalPageAPI,FollowAPI,UnFollowAPI} from "../../../api";

const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  message: "",
  error: false,
};
export const PersonalPageSlice = createSlice({
  name: "personalPage",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(PersonalPageAPI.pending, (state) => {
      state.isLoading = true;
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(PersonalPageAPI.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.data = action.payload;
    });
    builder.addCase(PersonalPageAPI.rejected, (state, action) => {
      state.isLoading = true;
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(FollowAPI.pending, (state, action) => {
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(FollowAPI.fulfilled, (state, action) => {
      state.isSuccess = true;
    });
    builder.addCase(FollowAPI.rejected, (state, action) => {
      state.error = true;
      state.message = "Error";
    });
    builder.addCase(UnFollowAPI.pending, (state, action) => {
      state.isSuccess = false;
      state.message = "pending...";
    });
    builder.addCase(UnFollowAPI.fulfilled, (state, action) => {
      state.isSuccess = true;
    });
    builder.addCase(UnFollowAPI.rejected, (state, action) => {
      state.error = true;
      state.message = "Error";
    });
  },
});
export default PersonalPageSlice.reducer;
