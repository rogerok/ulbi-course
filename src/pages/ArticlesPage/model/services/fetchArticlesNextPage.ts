import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticles';
import {
  getArticlesHasMore,
  getArticlesIsLoading,
  getArticlesPage,
} from '../selectors/articlesSelector';

export const fetchArticlesNextPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('articlesPage/fetchArticlesNextPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;
  const hasMore = getArticlesHasMore(getState());
  const page = getArticlesPage(getState());
  const isLoading = getArticlesIsLoading(getState());

  if (hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1));

    dispatch(fetchArticles());
  }
});
