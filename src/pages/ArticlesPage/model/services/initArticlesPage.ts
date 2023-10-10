import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from 'app/providers/StoreProvider';
import { articlesPageActions } from '../slices/articlesPageSlice';
import { fetchArticles } from './fetchArticles';
import { getArticlesIsInited } from '../selectors/articlesSelector';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>('initArticlesPage/fetchArticlesNextPage', async (_, thunkApi) => {
  const { getState, dispatch } = thunkApi;

  if (!getArticlesIsInited(getState())) {
    dispatch(articlesPageActions.initState());
    dispatch(fetchArticles());
  }
});
