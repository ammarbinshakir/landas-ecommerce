import { Route, Routes, Navigate } from "react-router-dom";
import { routes } from "./routes";
import AuthLayout from "../shared/layouts/AuthLayout";
import MainLayout from "../shared/layouts/MainLayout";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";
import { useAuth } from "../shared/hooks/useAuth";

const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Routes>
      {/* auth layout - for non-authenticated users */}
      <Route element={<AuthLayout />}>
        <Route
          path={routes.default}
          element={
            isAuthenticated ? <Navigate to={routes.main} /> : <LoginPage />
          }
        />
        <Route
          path={routes.login}
          element={
            isAuthenticated ? <Navigate to={routes.main} /> : <LoginPage />
          }
        />
        <Route path={routes.signup} element={<div>signup</div>} />
      </Route>

      {/* main layout - for authenticated users */}
      <Route
        element={
          isAuthenticated ? <MainLayout /> : <Navigate to={routes.login} />
        }
      >
        <Route path={routes.main} element={<HomePage />} />
      </Route>
    </Routes>
  );
};

export default Router;
