import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import PopUser from "./components/popups/popUser";
import PopBrowse from "./components/popups/popBrowse";
import PopNewCard from "./components/popups/popNewCard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="exit" element={<PopUser />} />
          <Route path="card/:id" element={<PopBrowse />} />
          <Route path="add-task" element={<PopNewCard />} />
        </Route>
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
