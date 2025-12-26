import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";
import {
  Overlay,
  ExitWrapper,
  ExitTitle,
  ExitButtons,
  ExitButtonNo,
  ExitButton,
} from "./ExitPage.styled";

function ExitPage({ setIsAuth, onClose }) {
  const navigate = useNavigate();

  const handleExit = () => {
    setIsAuth(false);
    localStorage.removeItem("isAuth"); 
    navigate("/login");
  };

  return createPortal(
    <Overlay onClick={onClose}>
      <ExitWrapper onClick={(e) => e.stopPropagation()}>
        <ExitTitle>Выйти из аккаунта?</ExitTitle>
        <ExitButtons>
          <ExitButton onClick={handleExit}>Да, выйти</ExitButton>
          <ExitButtonNo onClick={onClose}>Нет, остаться</ExitButtonNo>
        </ExitButtons>
      </ExitWrapper>
    </Overlay>,
    document.body
  );
}

export default ExitPage;
