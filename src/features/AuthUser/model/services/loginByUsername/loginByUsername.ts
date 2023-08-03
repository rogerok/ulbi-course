import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { USER_LOCALSTORAGE_KEY } from "shared/config/const/localStorage";
import { ThunkConfig } from "app/providers/StoreProvider";

interface LoginByUsernameProps {
  username: string;
  password: string;
}

export const
    loginByUsername = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
        "login/loginByUsername",
        async (user, thunkAPI) => {
            const { dispatch, extra, rejectWithValue } = thunkAPI;

            try {
                const response = await extra.api.post<User>("/login", {
                    username: user.username,
                    password: user.password
                });


                if (!response.data) {
                    throw new Error();
                }
                localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
                dispatch(userActions.setAuthData(response.data));
                extra.navigate?.("/about");

                return response.data;
            } catch (error) {
                return rejectWithValue("error");
            }


        }
    );