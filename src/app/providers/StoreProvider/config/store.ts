import {CombinedState, configureStore, Reducer, ReducersMapObject} from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { NavigateOptions } from "react-router";
import { To } from "react-router-dom";
import {StateSchema, ThunkExtraArg} from "./StateSchema";
import { createReducerManager } from "./reducerManager";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducerList,
    navigate?: (to: To, options?: NavigateOptions) => void
) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer

    };

    const extraArgument: ThunkExtraArg = {
        api: $api,
        navigate
    }

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce as  Reducer<CombinedState<StateSchema>>,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
