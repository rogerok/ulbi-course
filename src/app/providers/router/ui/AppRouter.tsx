import React, { Suspense, useCallback } from "react";
import { Route, Routes } from "react-router-dom";
import {
  AppRoutesProps,
  routeConfig,
} from "shared/config/routeConfig/routeConfig";
import { PageLoader } from "shared/ui/PageLoader/PageLoader";
import { RequireAuth } from "app/providers/router/ui/RequireAuth";

const AppRouter = () => {
  const renderWithWrapper = useCallback((item: AppRoutesProps) => {
    const element = (
      <Suspense fallback={<PageLoader />}>
        <div className="page-wrapper">{item.element}</div>
      </Suspense>
    );
    return (
      <Route
        key={item.path}
        path={item.path}
        element={
          !item.authOnly ? element : <RequireAuth>{element}</RequireAuth>
        }
      />
    );
  }, []);

  return <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>;
};

export default AppRouter;
