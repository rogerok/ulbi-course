import { Story } from "@storybook/react";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { StoreProvider } from "app/providers/StoreProvider";
import { loginReducer } from "features/AuthUser/model/slice/loginSlice";
import { profileReducer } from "entities/Profile";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader";

const defaultAsyncReducers: ReducerList = {
    loginForm: loginReducer,
    profile: profileReducer
};

export const StoreDecorator = (
    state: DeepPartial<StateSchema>,
    asyncReducer?: ReducerList ) =>
    (StoryComponent: Story) => (
        <StoreProvider
            initialState={state}
            asyncReducer={{ ...defaultAsyncReducers, ...asyncReducer }}>
            <StoryComponent />
        </StoreProvider>

    );
