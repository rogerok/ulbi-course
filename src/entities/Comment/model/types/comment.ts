import { User } from "entities/User";

export interface CommentModel {
  id: string;
  user: User;
  text: string;
  postId: string;
  articleId: string;
  userId: string;
}
