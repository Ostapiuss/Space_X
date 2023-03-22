import { Suspense, lazy } from 'react';

import { Routes, Route } from 'react-router-dom';

const LaunchPage = lazy(() => import('pages/LaunchPage'));

const MainRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LaunchPage />} />
        <Route path="/:id" element={<LaunchPage />} />
      </Routes>
    </Suspense>
  )
}

export default MainRoutes;
