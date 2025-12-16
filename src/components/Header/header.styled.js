import styled from "styled-components";

export const HeaderWrapper = styled.header`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
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
  margin-right: 20px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  a {
    color: #ffffff;
  }
`;

export const UserName = styled.a`
  display: flex;
  align-items: center;
  font-size: 14px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
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
