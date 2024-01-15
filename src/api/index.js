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
    const response = await instance.get(
      // `${process.env.REACT_APP_API}/api/articles?limit=20&offset=0`
      "/api/articles?limit=20&offset=0"
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
