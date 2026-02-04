import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.headerBg};
  color: ${({ theme }) => theme.colors.text};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  position: relative;
`;

export const Logo = styled.div`
  img {
    width: 85px;
  }
`;

export const Nav = styled.nav`
  max-width: 290px;
  display: flex;
  align-items: center;
  position: relative;
`;

export const CreateButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: #ffffff;
  border: none;
  font-size: 14px;
  font-weight: 500;
  margin-right: 14px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  a {
    color: #ffffff;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
    cursor: pointer;
    text-decoration: none;
  }

  @media screen and (max-width: 660px) {
  display: none;
}
`;

export const UserName = styled.button`
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }

  &::after {
    content: "";
    width: 6px;
    height: 6px;
    margin-left: 5px;
    border-left: 1.9px solid currentColor;
    border-bottom: 1.9px solid currentColor;
    transform: rotate(-45deg);
  }
`;


export const MobileCreateButton = styled.button`
  display: none;

  @media screen and (max-width: 660px) {
    display: flex;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    width: 90%;
    max-width: 400px;
    height: 50px;
    border-radius: 8px;
    background-color: ${({ theme }) => theme.colors.primary};
    color: #ffffff;
    border: none;
    font-size: 16px;
    font-weight: 500;
    justify-content: center;
    align-items: center;
    z-index: 999; 
    cursor: pointer;

    &:hover {
      background-color: ${({ theme }) => theme.colors.primaryHover};
    }

    a {
      color: #ffffff;
      text-decoration: none;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
