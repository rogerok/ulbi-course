import { combineReducers } from '@reduxjs/toolkit';
import { articleDetailsPageCommentsReducer } from './articleDetailsPageCommentsSlice';
import { articleDetailsPageRecommendationReducer } from './articleDetailsPageRecommendationSlice';
import { ArticleDetailsPageSchema } from '../types';

export const articleDetailsPageReducer =
  combineReducers<ArticleDetailsPageSchema>({
    comments: articleDetailsPageCommentsReducer,
    recommendation: articleDetailsPageRecommendationReducer,
  });
