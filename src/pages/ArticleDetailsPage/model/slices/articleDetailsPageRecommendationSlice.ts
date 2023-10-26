import { createEntityAdapter, createSlice } from '@reduxjs/toolkit';
import { StateSchema } from 'app/providers/StoreProvider';
import { Article } from 'entities/Article';
import { fetchRecommendation } from '../services/fetchRecommendation/fetchRecommendation';
import { ArticleDetailsRecommendationSchema } from '../types/ArticleDetailsRecommendationSchema';

const recommendationAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticleRecommendation =
  recommendationAdapter.getSelectors<StateSchema>(
    (state) =>
      state.articleDetailsPage?.recommendation ||
      recommendationAdapter.getInitialState(),
  );

const articleDetailsPageRecommendationSlice = createSlice({
  name: 'articleDetailsRecommendationSlice',
  initialState:
    recommendationAdapter.getInitialState<ArticleDetailsRecommendationSchema>({
      isLoading: false,
      error: undefined,
      ids: [],
      entities: {},
    }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecommendation.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
        if (action.meta.arg?.replace) {
          recommendationAdapter.removeAll(state);
        }
      })
      .addCase(fetchRecommendation.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.meta.arg?.replace) {
          recommendationAdapter.setAll(state, action.payload);
        } else {
          recommendationAdapter.addMany(state, action.payload);
        }
      })
      .addCase(fetchRecommendation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { reducer: articleDetailsPageRecommendationReducer } =
  articleDetailsPageRecommendationSlice;
