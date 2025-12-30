import { useNavigate } from "react-router-dom";

function PopUser({ setIsAuth }) {
  const navigate = useNavigate();

  const handleExit = (e) => {
    e.preventDefault();
    setIsAuth(false);
    localStorage.removeItem("isAuth");
    navigate("/login");
  };

  const handleClose = (e) => {
    e.preventDefault();
    navigate(-1);
  };

  return (
    <div className="pop-exit" id="popExit">
      <div className="pop-exit__container">
        <div className="pop-exit__block">
          <div className="pop-exit__ttl">
            <h2>Выйти из аккаунта?</h2>
          </div>

          <form className="pop-exit__form" id="formExit">
            <div className="pop-exit__form-group">
              <button
                className="pop-exit__exit-yes _hover01"
                onClick={handleExit}
              >
                Да, выйти
              </button>

              <button
                className="pop-exit__exit-no _hover03"
                onClick={handleClose}
              >
                Нет, остаться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PopUser;
