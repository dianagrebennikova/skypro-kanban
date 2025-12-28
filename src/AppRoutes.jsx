import { Routes, Route } from "react-router-dom";
import PropTypes from "prop-types";

import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

import ProtectedRoute from "./pages/ProtectedRoute";

import PopUser from "./components/popups/popUser";
import PopBrowse from "./components/popups/popBrowse";
import PopNewCard from "./components/popups/popNewCard";

function AppRoutes({ isAuth, setIsAuth }) {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<RegisterPage setIsAuth={setIsAuth} />} />

      <Route element={<ProtectedRoute isAuth={isAuth} />}>
        <Route path="/" element={<MainPage setIsAuth={setIsAuth} />}>
          <Route path="exit" element={<PopUser setIsAuth={setIsAuth} />} />
          <Route path="card/:id" element={<PopBrowse />} />
          <Route path="add-task" element={<PopNewCard />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

AppRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  setIsAuth: PropTypes.func.isRequired,
};

export default AppRoutes;
