import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ArticleRecommendationListSchema } from '../types/articleRecommendationListSchema';

const initialState: ArticleRecommendationListSchema = {};

export const articleRecommendationListSlice = createSlice({
  name: 'articleRecommendationList',
  initialState,
  reducers: {
    template: (state, action: PayloadAction<string>) => {},
  },
});

export const { actions: articleRecommendationListActions } =
  articleRecommendationListSlice;
export const { reducer: articleRecommendationListReducer } =
  articleRecommendationListSlice;
