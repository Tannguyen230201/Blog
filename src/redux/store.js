import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./reducers/login";
import ArticlesSlice from "./reducers/articles";
import CommentsSlice from "./reducers/comments";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    articles: ArticlesSlice,
    comments: CommentsSlice,
  },
});
