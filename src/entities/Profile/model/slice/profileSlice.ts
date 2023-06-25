import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {loginByUsername} from "features/AuthUser/model/services/loginByUsername/loginByUsername";
import {fetchProfileData} from "entities/Profile";
import { Profile, ProfileSchema } from "../types/Profile";


const initialState: ProfileSchema = {
    readonly: true,
    isLoading: false,
    error: undefined,
    data: undefined
};

export const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {
        // setUsername: (state, action: PayloadAction<string>) => {
        //     state.username = action.payload;
        // },
        // setPassword: (state, action: PayloadAction<string>) => {
        //     state.password = action.payload;
        // }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchProfileData.pending, (state, action) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
                state.isLoading = false;
                state.data = action.payload

            })
            .addCase(loginByUsername.rejected, (state, action) => {
                state.error = action.payload;
                state.isLoading = false;
            });
    }
});


export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;
