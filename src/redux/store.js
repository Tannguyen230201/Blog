import { configureStore } from "@reduxjs/toolkit";
import LoginSlice from "./reducers/login";
import ArticlesSlice from "./reducers/articles";
import CommentsSlice from "./reducers/comments";
import FavoriteSlice  from "./reducers/favorite";
import DetailArticleSlice from "./reducers/detailArticle";
import PersonalPageSlice  from "./reducers/user";

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    articles: ArticlesSlice,
    comments: CommentsSlice,
    favorite : FavoriteSlice,
    detail: DetailArticleSlice,
    personalPage: PersonalPageSlice,
  },
});
