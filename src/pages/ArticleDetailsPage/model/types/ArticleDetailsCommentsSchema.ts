import { EntityState } from "@reduxjs/toolkit";
import { CommentSchema } from "entities/Comment";

export interface ArticleDetailsCommentsSchema
  extends EntityState<CommentSchema> {
  isLoading?: boolean;
  error?: string;
}
