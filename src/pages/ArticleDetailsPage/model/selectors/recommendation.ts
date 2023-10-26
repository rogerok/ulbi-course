import { StateSchema } from 'app/providers/StoreProvider';

export const getArticleRecommendationIsLoading = (state: StateSchema) =>
  state.articleDetailsPage?.recommendation?.isLoading;
export const getArticleRecommendationError = (state: StateSchema) =>
  state.articleDetailsPage?.recommendation?.error;
