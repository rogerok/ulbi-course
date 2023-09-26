import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { getArticlesLimit } from 'pages/ArticlesPage/model/selectors/articlesSelector';

interface FetchArticlesProps {
  page?: number;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesProps,
  ThunkConfig<string>
>('articlesPage/fetchArticles', async (props, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const { page = 1 } = props;

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: getArticlesLimit(getState()),
        _page: page,
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
