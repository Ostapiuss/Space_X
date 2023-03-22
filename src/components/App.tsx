import MainRoutes from 'components/MainRoutes/routes'
import AppModal from "./AppModal";

import '../../node_modules/modern-normalize/modern-normalize.css';
import '../index.css';

export const App = () => {
  return (
    <>
      <div className="app-root">
        <MainRoutes />
      </div>
      <AppModal />
    </>
  );
};
