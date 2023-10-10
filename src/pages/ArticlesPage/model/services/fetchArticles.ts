import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import {
  getArticlesLimit,
  getArticlesPage,
  getArticlesSearch,
  getArticlesSortField,
  getArticlesSortOrder,
} from 'pages/ArticlesPage/model/selectors/articlesSelector';

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesProps | undefined,
  ThunkConfig<string>
>('articlesPage/fetchArticles', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const sortOrder = getArticlesSortOrder(getState());
  const sortField = getArticlesSortField(getState());
  const search = getArticlesSearch(getState());
  const page = getArticlesPage(getState());

  try {
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: getArticlesLimit(getState()),
        _page: page,
        _sort: sortField,
        _order: sortOrder,
        q: search,
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
