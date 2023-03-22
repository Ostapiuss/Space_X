import MainRoutes from 'components/MainRoutes/routes'

import '../../node_modules/modern-normalize/modern-normalize.css';
import '../index.css';
import AppModal from "./AppModal";

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
