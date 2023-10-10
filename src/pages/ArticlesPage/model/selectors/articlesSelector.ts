import { StateSchema } from 'app/providers/StoreProvider';
import { SortOrder } from 'shared/types/SortOrder';
import { ArticleSortField } from 'entities/Article';

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
export const getArticlesSortOrder = (state: StateSchema): SortOrder =>
  state.articles?.order ?? 'asc';
export const getArticlesSortField = (state: StateSchema): ArticleSortField =>
  state.articles?.sort ?? ArticleSortField.CREATED;
export const getArticlesSearch = (state: StateSchema) =>
  state.articles?.search ?? '';
