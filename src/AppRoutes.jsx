import { Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import AddTaskPage from "./pages/AddTaskPage";
import ExitPage from "./pages/ExitPage";
import NotFoundPage from "./pages/NotFoundPage";
import PropTypes from "prop-types";

function AppRoutes({ isAuth, setIsAuth }) {
  return (
    <Routes>
      {/* Доска с карточками */}
      <Route
        path="/"
        element={
          isAuth ? (
            <MainPage setIsAuth={setIsAuth} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Просмотр / редактирование карточки */}
      <Route
        path="/card/:id"
        element={
          isAuth ? (
            <MainPage setIsAuth={setIsAuth} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Добавление задачи */}
      <Route
  path="/add-task"
  element={
    isAuth ? <AddTaskPage /> : <Navigate to="/login" />
  }
/>


      {/* Выход */}
      <Route
        path="/exit"
        element={
          isAuth ? (
            <ExitPage setIsAuth={setIsAuth} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />

      {/* Публичные страницы */}
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route
        path="/register"
        element={<RegisterPage setIsAuth={setIsAuth} />}
      />

      {/* 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;

AppRoutes.propTypes = {
  isAuth: PropTypes.bool.isRequired,
  setIsAuth: PropTypes.func.isRequired,
};
