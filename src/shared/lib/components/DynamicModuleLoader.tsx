import React, { FC, useEffect } from "react";
import { useDispatch, useStore } from "react-redux";
import { ReduxStoreWithManager } from "app/providers/StoreProvider";
import { StateSchemaKey } from "app/providers/StoreProvider/config/StateSchema";
import { Reducer } from "@reduxjs/toolkit";

export type ReducerList = {
  [name in StateSchemaKey]?: Reducer
}


interface DynamicModuleLoaderProps {
  reducers: ReducerList;
  children: React.ReactNode;
  removeAfterUnmount?: boolean;

}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = (props) => {
    const { reducers, children, removeAfterUnmount } = props;
    const dispatch = useDispatch();

    const store = useStore() as ReduxStoreWithManager;

    useEffect(() => {
        Object.entries(reducers).forEach(([name, reducer]) => {
            store.reducerManager.add(name as StateSchemaKey, reducer);
            dispatch({ type: `INIT ${name} LOADER` });
        });


        return () => {
            if (removeAfterUnmount) {
                Object.entries(reducers).forEach(([name, reducer]) => {
                    store.reducerManager.remove(name as StateSchemaKey);
                    dispatch({ type: `DESTROY ${name} LOADER` });
                });

            }
        };
    // eslint-disable-next-line
  }, []);


    return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
        <>

            {children}

        </>
    );
};
