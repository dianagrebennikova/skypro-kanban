import styled from "styled-components";

export const LoginForm = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: rgba(234, 238, 246, 1);
`;

export const LoginWrapper = styled.div`
  width: 368px;
  height: 329px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 60px;
  background: rgba(255, 255, 255, 1);
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  color:var(--Font / 90, rgba(0, 0, 0, 1));;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  font-family: Roboto;
  font-size: 14px;
  color: #ffffff;
  box-sizing: border-box;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    margin-bottom: 10px;
  &::placeholder {
    color: rgba(148, 166, 190, 1);
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 8px 10px;
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  background: #4b6cf7;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const RegisterLink = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  color: rgba(148, 166, 190, 0.4);
  a {
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  cursor: pointer;
  color: rgba(148, 166, 190, 0.4);
  text-decoration: underline;
  }
`;