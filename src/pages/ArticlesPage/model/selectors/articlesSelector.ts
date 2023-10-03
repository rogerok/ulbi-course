import { StateSchema } from 'app/providers/StoreProvider';

export const getArticlesIsLoading = (state: StateSchema) =>
  state.articles?.isLoading;

export const getArticlesError = (state: StateSchema) => state.articles?.error;

export const getArticlesView = (state: StateSchema) => state.articles?.view;
export const getArticlesPage = (state: StateSchema) =>
  state.articles?.page || 1;
export const getArticlesLimit = (state: StateSchema) =>
  state.articles?.limit || 9;
export const getArticlesHasMore = (state: StateSchema) =>
  state.articles?.hasMore;
export const getArticlesIsInited = (state: StateSchema) =>
  state.articles?._inited;
