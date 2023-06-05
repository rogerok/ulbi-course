import { UserSchema } from "entities/User";
import { LoginSchema } from "features/AuthUser";

export interface StateSchema {
  user?: UserSchema;
  loginForm?: LoginSchema;
}
