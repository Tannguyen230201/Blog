import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./reducers/login";
import ArticlesSlice from "./reducers/articles";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    articles: ArticlesSlice,
  },
});
