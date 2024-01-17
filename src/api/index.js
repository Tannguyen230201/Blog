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
      // "/api/articles?limit=20&offset=0"
    );
    return response.data;
  }
);
export const DetailArticleAPI = createAsyncThunk(
  "get_detail_article_API",
  async (slug) => {
    const response = await instance.get(
      `/api/articles/${slug}`
      // "/api/articles?limit=20&offset=0"
    );
    return response.data;
  }
);
export const CreateArticlesAPI = createAsyncThunk(
  "create_articles_API",
  async (user) => {
    const response = await instance.post(
      `/api/articles`,
      user
    );
    return response.data;
  }
);
export const DeleteArticlesAPI = createAsyncThunk(
  "delete_articles_API",
  async (slug) => {
    const response = await instance.delete(
      `/api/articles/${slug}`,
    );
    return response.data;
  }
);
export const GetCommentsAPI = createAsyncThunk(
  "get_comments_API",
  async (slug) => {
    const response = await axios.get(
      `${process.env.REACT_APP_API}/api/articles/${slug}/comments`,
    );
    return response.data;
  }
);
export const PostCommentAPI = createAsyncThunk(
  "post_comments_API",
  async (data) => {
    const response = await instance.post(
      `/api/articles/${data.slug}/comments`,data.body
    );
    return response.data;
  }
);
export const LikeArticleAPI = createAsyncThunk(
  "like_articles_API",
  async (slug) => {
    const response = await instance.post(
      `/api/articles/${slug}/favorite`
    );
    return response.data;
  }
);