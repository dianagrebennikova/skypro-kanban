import { useState, useRef, useEffect } from "react";
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

function Header({ isDark, toggleTheme }) {
  const { user } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const [isExitOpen, setIsExitOpen] = useState(false);

  const popupRef = useRef(null); 

  const handleToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        popupRef.current && 
        !popupRef.current.contains(event.target) &&
        event.target.id !== "userNameButton" 
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [popupRef]);

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <Logo>
            <Link to="/">
              <img
                src={isDark ? "/images/logo_dark.png" : "/images/logo.png"}
                alt="logo"
              />
            </Link>
          </Logo>

          <Nav>
            <CreateButton>
              <Link to="/add-task">Создать новую задачу</Link>
            </CreateButton>

            <UserName
              id="userNameButton" 
              type="button"
              onClick={handleToggle}
            >
              {user?.login || "Пользователь"}
            </UserName>

            {isOpen && (
              <div
                ref={popupRef} 
                className={`header__pop-user-set ${isDark ? "dark-mode" : ""}`}
              >
                <p className="pop-user-set__name">
                  {user?.name || "Пользователь"}
                </p>

                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input
                    type="checkbox"
                    checked={isDark}
                    onChange={toggleTheme}
                  />
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
              <PopUser onClose={() => setIsExitOpen(false)} isDarkTheme={isDark} />
            )}
          </Nav>
        </HeaderBlock>
      </div>
      
    </HeaderWrapper>
  );
}

export default Header;
