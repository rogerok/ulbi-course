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
import { addQueryParams } from 'shared/lib/url/addQueryParams/addQueryParams';

interface FetchArticlesProps {
  replace?: boolean;
}

export const fetchArticles = createAsyncThunk<
  Article[],
  FetchArticlesProps | undefined,
  ThunkConfig<string>
>('articlesPage/fetchArticles', async (_, thunkApi) => {
  const { extra, rejectWithValue, getState } = thunkApi;
  const order = getArticlesSortOrder(getState());
  const limit = getArticlesLimit(getState());
  const sort = getArticlesSortField(getState());
  const search = getArticlesSearch(getState());
  const page = getArticlesPage(getState());

  try {
    addQueryParams({ sort, order, search });
    const response = await extra.api.get<Article[]>('/articles', {
      params: {
        _expand: 'user',
        _limit: limit,
        _page: page,
        _sort: order,
        _order: sort,
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
