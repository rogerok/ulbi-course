import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routerConfig } from 'shared/config/routeConfig/routeConfig';
import { PageLoader } from 'widgets/PageLoader';

export function AppRouter() {
    return (
        <Routes>
            {Object.values(routerConfig).map(({ path, element }) => (
                <Route
                    key={path}
                    path={path}
                    element={(
                        <Suspense fallback={<PageLoader />}>
                            <div className="page-wrapper">{element}</div>
                        </Suspense>
                    )}
                />
            ))}
        </Routes>
    );
}
