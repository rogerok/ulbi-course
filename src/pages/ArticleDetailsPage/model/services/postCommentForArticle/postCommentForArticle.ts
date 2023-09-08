import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentModel } from "entities/Comment";
import { getUserAuthData } from "entities/User";
import { getArticleDetailsData } from "entities/Article";
import { addCommentActions } from "features/addCommentForm/model/slices/addCommentFormSlice";
import { fetchCommentByArticleId } from "../fetchCommentByArticleId/fetchCommentByArticleId";

export const postCommentForArticle = createAsyncThunk<
  CommentModel,
  string,
  ThunkConfig<string>
>("articleDetails/postComment", async (commentText, thunkAPI) => {
  const { extra, rejectWithValue, getState, dispatch } = thunkAPI;

  const userId = getUserAuthData(getState())?.id;
  const articleId = getArticleDetailsData(getState())?.id;

  if (!userId || !articleId) {
    throw new Error("data not found");
  }

  try {
    const response = await extra.api.post<CommentModel>("/comments", {
      articleId,
      userId,
      commentText,
    });

    if (!response.data) {
      throw new Error();
    }

    dispatch(addCommentActions.setText(""));
    dispatch(fetchCommentByArticleId(articleId));
    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
