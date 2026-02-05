import { Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import PopUser from "./components/popups/popUser";
import PopBrowse from "./components/popups/popBrowse";
import PopNewCard from "./components/popups/popNewCard";


function AppRoutes({ isDark, toggleTheme }) {
  return (
    <>
    <Routes>
<Route path="/login" element={<LoginPage isDark={isDark} />} />
<Route path="/register" element={<RegisterPage isDark={isDark} />} />


      <Route element={<ProtectedRoute />}>
        <Route
          path="/"
          element={<MainPage isDark={isDark} toggleTheme={toggleTheme} />}
        >
          <Route path="exit" element={<PopUser />} />
          <Route path="card/:id" element={<PopBrowse />} />
          <Route path="add-task" element={<PopNewCard />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>

    </>
  );
}

export default AppRoutes;
