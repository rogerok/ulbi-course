import { StateSchema } from "app/providers/StoreProvider";

export const getArticleCommentsIsLoading = (state: StateSchema) =>
  state.comments?.isLoading;

export const getArticleCommentsError = (state: StateSchema) =>
  state.comments?.error;
