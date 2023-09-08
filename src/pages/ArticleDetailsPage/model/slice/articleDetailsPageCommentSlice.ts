import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit";
import { CommentModel } from "entities/Comment";
import { StateSchema } from "app/providers/StoreProvider";
import { fetchCommentByArticleId } from "../services/fetchCommentByArticleId/fetchCommentByArticleId";
import { ArticleDetailsCommentSchema } from "../../model/types/ArticleDetailsPageModel";

const commentsAdapter = createEntityAdapter<CommentModel>({
  selectId: (comment) => comment.id,
});

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  (state) => state.comments || commentsAdapter.getInitialState()
);

const articleDetailsPageCommentSlice = createSlice({
  name: "articleDetailsPageCommentSlice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentSchema>({
    isLoading: false,
    error: undefined,
    ids: ["1", "2"],
    entities: {},
  }),
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCommentByArticleId.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchCommentByArticleId.fulfilled,
        (state, action: PayloadAction<CommentModel[]>) => {
          state.isLoading = false;
          commentsAdapter.setAll(state, action.payload);
          state.error = undefined;
        }
      )
      .addCase(fetchCommentByArticleId.rejected, (state, action) => {
        state.error = "error";
        state.isLoading = false;
      });
  },
});

export const { reducer: articleDetailsPageCommentReducer } =
  articleDetailsPageCommentSlice;
