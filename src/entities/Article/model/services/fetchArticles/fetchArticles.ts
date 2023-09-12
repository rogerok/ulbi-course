import { createAsyncThunk } from "@reduxjs/toolkit";
import { Article } from "entities/Article";
import { ThunkConfig } from "app/providers/StoreProvider";

export const fetchArticles = createAsyncThunk<
  Article[],
  void,
  ThunkConfig<string>
>("articles/fetchArticles", async (_, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  try {
    const response = await extra.api.get<Article[]>(`/articles`);

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
