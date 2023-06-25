import { FC, ReactNode } from "react";
import { Provider } from "react-redux";
import { createReduxStore } from "app/providers/StoreProvider/config/store";
import { StateSchema } from "app/providers/StoreProvider/config/StateSchema";
import { ReducersMapObject } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
import {ReducerList} from "shared/lib/components/DynamicModuleLoader";

interface StoreProviderProps {
  children?: ReactNode;
  initialState?: DeepPartial<StateSchema>;
  asyncReducer?: ReducerList;
}


export const StoreProvider: FC<StoreProviderProps> = (props) => {
    const { children, asyncReducer, initialState } = props;

    const navigate = useNavigate();

    const store = createReduxStore(
    initialState as StateSchema,
    asyncReducer as ReducersMapObject<StateSchema>,
    navigate
    );

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
