import { useNavigate } from "react-router-dom";

function PopUser({ setIsAuth, onClose }) {
  const navigate = useNavigate();

  const handleExit = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    localStorage.removeItem("userLogin");

    setIsAuth(false);

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
        <div className="pop-exit__block">
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
