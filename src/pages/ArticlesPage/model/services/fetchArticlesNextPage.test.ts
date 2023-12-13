import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk';

import { fetchArticlesNextPage } from './fetchArticlesNextPage';
import { fetchArticles } from './fetchArticles';

jest.mock('./fetchArticles');

const data = {};

describe('fetchArticlesNextPage.test', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articles: {
        hasMore: true,
        page: 2,
        limit: 4,
        ids: [],
        entities: {},
        isLoading: false,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(4);
    expect(fetchArticles).toHaveBeenCalled();
  });
  test('error', async () => {
    const thunk = new TestAsyncThunk(fetchArticlesNextPage, {
      articles: {
        hasMore: false,
        page: 2,
        limit: 4,
        ids: [],
        entities: {},
        isLoading: false,
      },
    });

    await thunk.callThunk();
    expect(thunk.dispatch).toHaveBeenCalledTimes(2);
    expect(fetchArticles).not.toHaveBeenCalled();
  });
});
