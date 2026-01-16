import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/useAuth";
import PopUser from "../popups/popUser.jsx";

import {
  HeaderWrapper,
  HeaderBlock,
  Logo,
  Nav,
  CreateButton,
  UserName,
} from "./header.styled.js";

function Header() {
  const { user } = useAuth();

  const [isOpen, setIsOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);

  const handleToggle = () => setIsOpen((prev) => !prev);

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
              {user?.login || "Пользователь"}
            </UserName>

            {isOpen && (
              <div className="header__pop-user-set">
                <p className="pop-user-set__name">
                  {user?.name || "Пользователь"}
                </p>

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
              <PopUser onClose={() => setIsExitOpen(false)} />
            )}
          </Nav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
