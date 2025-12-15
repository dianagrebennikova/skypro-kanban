import { useState } from "react";
import {
  HeaderWrapper,
  HeaderBlock,
  Logo,
  Nav,
  CreateButton,
  UserName,
} from "./header.styled.js"

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <HeaderWrapper>
      <div className="container">
        <HeaderBlock>
          <Logo>
            <a href="/" target="_self">
              <img src="/images/logo.png" alt="logo" />
            </a>
          </Logo>

          <Nav>
            <CreateButton>
              <a href="#popNewCard">Создать новую задачу</a>
            </CreateButton>

            <UserName onClick={() => setIsOpen(!isOpen)}>
              Ivan Ivanov
            </UserName>

            <div
              className="header__pop-user-set"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <p className="pop-user-set__name">Ivan Ivanov</p>
              <p className="pop-user-set__mail">ivan.ivanov@gmail.com</p>

              <div className="pop-user-set__theme">
                <p>Темная тема</p>
                <input type="checkbox" />
              </div>

              <button type="button" className="_hover03">
                Выйти
              </button>
            </div>
          </Nav>
        </HeaderBlock>
      </div>
    </HeaderWrapper>
  );
}

export default Header;
