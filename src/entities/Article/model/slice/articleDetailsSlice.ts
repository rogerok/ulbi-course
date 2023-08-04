import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { fetchArticleDetailsData } from "../services/fetchArticleDetailsData";
import { Article, ArticleSchema } from "../types/Article";

const initialState: ArticleSchema = {
  data: undefined,
  error: undefined,
  isLoading: false,
};

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleDetailsData.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticleDetailsData.fulfilled,
        (state, action: PayloadAction<Article>) => {
          state.isLoading = false;
          state.data = action.payload;
          state.error = undefined;
        }
      )
      .addCase(fetchArticleDetailsData.rejected, (state, action) => {
        state.error = "error";
        state.isLoading = false;
      });
  },
});

export const { actions: articleDetailsActions } = articleDetailsSlice;
export const { reducer: articleDetailsReducer } = articleDetailsSlice;
