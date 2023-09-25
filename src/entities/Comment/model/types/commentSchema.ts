import { User } from 'entities/User';

export interface CommentSchema {
  id: string;
  user: User;
  text: string;
}
