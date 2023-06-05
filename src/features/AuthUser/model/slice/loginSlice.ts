import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { loginByUsername } from "features/AuthUser/model/services/loginByUsername/loginByUsername";
import { LoginSchema } from "../types/LoginSchema";


const initialState: LoginSchema = {
    username: "",
    password: "",
    isLoading: false
};

export const loginSlice = createSlice({
    name: "login",
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginByUsername.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(loginByUsername.fulfilled, (state, action) => {
                state.isLoading = false;

            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});


export const { actions: loginActions } = loginSlice;
export const { reducer: loginReducer } = loginSlice;
