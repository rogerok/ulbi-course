import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article, ArticleView } from 'entities/Article';
import { ArticlesSchema } from 'pages/ArticlesPage/model/types/articlesSchema';
import { fetchArticles } from 'pages/ArticlesPage/model/services/fetchArticles';
import { ARTICLES_VIEW_LOCALSTORAGE_KEY } from 'shared/const/localstorage';

const articlesAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  (state) => state.articles || articlesAdapter.getInitialState()
);

const articlesPageSlice = createSlice({
  name: 'articlesPageSlice',
  initialState: articlesAdapter.getInitialState<ArticlesSchema>({
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    view: ArticleView.BIG,
  }),
  reducers: {
    setArticleView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(ARTICLES_VIEW_LOCALSTORAGE_KEY, action.payload);
    },
    initState: (state) => {
      state.view = localStorage.getItem(
        ARTICLES_VIEW_LOCALSTORAGE_KEY
      ) as ArticleView;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticles.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.isLoading = false;
          articlesAdapter.setAll(state, action);
        }
      )
      .addCase(fetchArticles.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articlesPageReducer } = articlesPageSlice;
export const { actions: articlesPageActions } = articlesPageSlice;
