import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { routerConfig } from 'shared/config/routeConfig/routeConfig';

export function AppRouter() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                {Object.values(routerConfig).map(({ path, element }) => (
                    <Route
                        key={path}
                        path={path}
                        element={<div className="page-wrapper">{element}</div>}
                    />
                ))}
            </Routes>
        </Suspense>
    );
}
