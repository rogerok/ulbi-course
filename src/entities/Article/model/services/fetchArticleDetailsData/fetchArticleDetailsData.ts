import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchArticleDetailsData = createAsyncThunk<
  Article,
  string,
  ThunkConfig<string>
>("article/fetchArticleDetailsData", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Article>(`/articles/${articleId}`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
