import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import { useState } from "react";

function PopUser({ onClose }) {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const [isDarkTheme] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  const handleExit = (e) => {
    e.preventDefault();
    logout();
    onClose?.();
    navigate("/login", { replace: true });
  };

  const handleClose = (e) => {
    e.preventDefault();
    onClose?.();
  };

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className={`pop-exit__block ${isDarkTheme ? "dark-mode" : ""}`}>
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>

          <div className="pop-exit__form-group">
            <button
              type="button"
              className="pop-exit__exit-yes _hover01"
              onClick={handleExit}
            >
              Да, выйти
            </button>

            <button
              type="button"
              className="pop-exit__exit-no _hover03"
              onClick={handleClose}
            >
              Нет, остаться
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUser;
