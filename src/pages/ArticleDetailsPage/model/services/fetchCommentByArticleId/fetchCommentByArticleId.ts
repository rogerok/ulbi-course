import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from "app/providers/StoreProvider";
import { CommentModel } from "entities/Comment";

export const fetchCommentByArticleId = createAsyncThunk<
  CommentModel[],
  string | undefined,
  ThunkConfig<string>
>("articleDetailsPage/fetchCommentByArticleId", async (articleId, thunkAPI) => {
  const { extra, rejectWithValue } = thunkAPI;

  if (!articleId) {
    return rejectWithValue("error");
  }

  try {
    const response = await extra.api.get<CommentModel[]>(`/comments`, {
      params: { articleId, _expand: "user" },
    });

    if (!response.data) {
      throw new Error();
    }

    return response.data;
  } catch (error) {
    return rejectWithValue("error");
  }
});
