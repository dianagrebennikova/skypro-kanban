import { useState } from "react";
import { Link } from "react-router-dom";
import {
  HeaderWrapper,
  HeaderBlock,
  Logo,
  Nav,
  CreateButton,
  UserName,
} from "./header.styled.js";

function Header({ openExit }) {
  const [isOpen, setIsOpen] = useState(false);

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
              Ivan Ivanov
            </UserName>

            {isOpen && (
              <div className="header__pop-user-set">
                <p className="pop-user-set__name">Ivan Ivanov</p>
                <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>

                <div className="pop-user-set__theme">
                  <p>Темная тема</p>
                  <input type="checkbox" />
                </div>

                <button
                  type="button"
                  className="_hover03"
                  onClick={() => {
                    setIsOpen(false);
                    openExit();
                  }}
                >
                  Выйти
                </button>
              </div>
            )}
          </Nav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
