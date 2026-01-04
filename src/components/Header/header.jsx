import { useState } from "react";
import { Link } from "react-router-dom";
import PopUser from "../popups/popUser.jsx";
import {
  HeaderWrapper,
  HeaderBlock,
  Logo,
  Nav,
  CreateButton,
  UserName,
} from "./header.styled.js";

function Header({ setIsAuth }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

  const userLogin = localStorage.getItem("userLogin") || "Пользователь";

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <Logo>
            <Link to="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </Logo>

          <Nav>
            <CreateButton>
              <Link to="/add-task">Создать новую задачу</Link>
            </CreateButton>

            <UserName type="button" onClick={handleToggle}>
              {userLogin}
            </UserName>

            {isOpen && (
              <div className="header__pop-user-set">
                <p className="pop-user-set__name">{userLogin}</p>

                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" />
                </div>

                <button
                  type="button"
                  className="_hover03"
                  onClick={() => {
                    setIsExitOpen(true);
                    setIsOpen(false); 
                  }}
                >
                  Выйти
                </button>
              </div>
            )}

            {isExitOpen && (
              <PopUser
                setIsAuth={setIsAuth}
                onClose={() => setIsExitOpen(false)}
              />
            )}
          </Nav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
