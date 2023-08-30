import { CommentModel } from "entities/Comment";
import { EntityState } from "@reduxjs/toolkit";

export interface ArticleDetailsCommentSchema extends EntityState<CommentModel> {
  isLoading?: boolean;
  error?: string;
}
