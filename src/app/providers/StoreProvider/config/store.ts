import { configureStore, DeepPartial, ReducersMapObject } from "@reduxjs/toolkit";
import { userReducer } from "entities/User";
import { $api } from "shared/api/api";
import { NavigateOptions } from "react-router";
import { To } from "react-router-dom";
import { StateSchema } from "./StateSchema";
import { createReducerManager } from "./reducerManager";

export function createReduxStore(
    initialState?: StateSchema,
    asyncReducers?: ReducersMapObject<StateSchema>,
    navigate?: (to: To, options?: NavigateOptions) => void
) {

    const rootReducer: ReducersMapObject<StateSchema> = {
        ...asyncReducers,
        user: userReducer

    };

    const reducerManager = createReducerManager(rootReducer);

    const store = configureStore({
        reducer: reducerManager.reduce,
        devTools: __IS_DEV__,
        preloadedState: initialState,
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate
                }
            }
        })
    });

    // @ts-ignore
    store.reducerManager = reducerManager;

    return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
