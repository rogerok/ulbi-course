import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSortField } from 'entities/Article';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticles';
import { getArticlesIsInited } from '../selectors/articlesSelector';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>('initArticlesPage/fetchArticlesNextPage', async (params, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  if (!getArticlesIsInited(getState())) {
    const order = params.get('order');
    const sort = params.get('sort');
    const search = params.get('search');

    if (order) {
      dispatch(articlesPageActions.setOrder(order as SortOrder));
    }

    if (sort) {
      dispatch(articlesPageActions.setSort(sort as ArticleSortField));
    }

    if (search) {
      dispatch(articlesPageActions.setSearch(search));
    }

    dispatch(articlesPageActions.initState());
    dispatch(fetchArticles());
  }
});
