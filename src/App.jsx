import { useState, useEffect } from "react";
import AppRoutes from "./AppRoutes";

function App() {
  const [isAuth, setIsAuth] = useState(() => {
    return localStorage.getItem("isAuth") === "true";
  });

  useEffect(() => {
    localStorage.setItem("isAuth", isAuth);
  }, [isAuth]);

  return <AppRoutes isAuth={isAuth} setIsAuth={setIsAuth} />;
}

export default App;

