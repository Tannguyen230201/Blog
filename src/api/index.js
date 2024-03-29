import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios, { AxiosHeaders } from "axios";
import instance from "../services/customizeAxios";

const token = localStorage.getItem("token");
export const LoginAPI = createAsyncThunk("loginAPI", async (user) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API}/api/users/login`,
    user
  );
  return response.data;
});

export const GetAllArticlesAPI = createAsyncThunk(
  "get_all_articles_API",
  async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/articles?limit=10&offset=0`
      // "/api/articles?limit=105&offset=0"
    );
    return response.data;
  }
);
export const MyArticlesAPI = createAsyncThunk(
  "my_articles_API",
  async (user) => {
    const response = await instance.get(
      `/api/articles?author=${user}&limit=10&offset=0`
    );
    return response.data;
  }
);
export const FavoriteArticlesAPI = createAsyncThunk(
  "favorite_articles_API",
  async (user) => {
    const response = await instance.get(
      `/api/articles?favorited=${user}&limit=10&offset=0`
    );
    return response.data;
  }
);
export const DetailArticleAPI = createAsyncThunk(
  "get_detail_article_API",
  async (slug) => {
    const response = await instance.get(
      // `${process.env.REACT_APP_API}/api/articles/${slug}`
      `/api/articles/${slug}`,
    );
    return response.data;
  }
);
export const CreateArticlesAPI = createAsyncThunk(
  "create_articles_API",
  async (user) => {
    const response = await instance.post(`/api/articles`, user);
    return response.data;
  }
);
export const UpdateArticlesAPI = createAsyncThunk(
  "update_articles_API",
  async (data) => {
    const response = await instance.put(`/api/articles/${data.slug}`, data.body);
    return response.data;
  }
);
export const DeleteArticlesAPI = createAsyncThunk(
  "delete_articles_API",
  async (slug) => {
    const response = await instance.delete(`/api/articles/${slug}`);
    return response.data;
  }
);
export const GetCommentsAPI = createAsyncThunk(
  "get_comments_API",
  async (slug) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/articles/${slug}/comments`
    );
    return response.data;
  }
);
export const PostCommentAPI = createAsyncThunk(
  "post_comments_API",
  async (data) => {
    const response = await instance.post(
      `/api/articles/${data.slug}/comments`,
      data.body
    );
    return response.data;
  }
);
export const DeleteCommentAPI = createAsyncThunk(
  "delete_comments_API",
  async (data) => {
    const response = await instance.post(
      `/api/articles/${data.slug}/comments/${data.idComment}`,
      data.body
    );
    return response.data;
  }
);
export const LikeArticleAPI = createAsyncThunk(
  "like_articles_API",
  async (slug) => {
    const response = await instance.post(`/api/articles/${slug}/favorite`);
    return response.data;
  }
);
export const UnLikeArticleAPI = createAsyncThunk(
  "un_like_articles_API",
  async (slug) => {
    const response = await instance.delete(`/api/articles/${slug}/favorite`);
    return response.data;
  }
);
export const PersonalPageAPI = createAsyncThunk(
  "personal_user_API",
  async (user) => {
    const response = await instance.get(
      `/api/profiles/${user}`
      // "/api/articles?limit=105&offset=0"
    );
    return response.data;
  }
);
export const FollowAPI = createAsyncThunk(
  "follow_API",
  async (user) => {
    const response = await instance.post(
      `/api/profiles/${user}/follow`
      // "/api/articles?limit=105&offset=0"
    );
    return response.data;
  }
);
export const UnFollowAPI = createAsyncThunk(
  "un_follow_API",
  async (user) => {
    const response = await instance.delete(
      `/api/profiles/${user}/follow`
      // "/api/articles?limit=105&offset=0"
    );
    return response.data;
  }
);
export const ArticlesFollowingAPI = createAsyncThunk(
  "articles_following_API",
  async () => {
    const response = await instance.get(
      `api/articles/feed?limit=10&offset=10`
      // "/api/articles?limit=105&offset=0"
    );
    return response.data;
  }
);