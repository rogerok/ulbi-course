import { Story } from "@storybook/react";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { StoreProvider } from "app/providers/StoreProvider";
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { loginReducer } from "features/AuthUser/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
    loginForm: loginReducer,
    profile: profileReducer
};

export const StoreDecorator = (
    state: Partial<StateSchema>,
    asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>) =>
    (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducer={{ ...defaultAsyncReducers, ...asyncReducer }}>
            <StoryComponent />
        </StoreProvider>

    );
