import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article, ArticleType } from 'entities/Article';

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchRecommendation = createAsyncThunk<
  Article[],
  FetchArticlesProps | undefined,
  ThunkConfig<string>
>('articlesDetails Page/fetchRecommendation', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: 4,
      },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (e) {
    return rejectWithValue('error');
  }
});
