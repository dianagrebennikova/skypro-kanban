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
  min-height: 329px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 50px 60px;
  background: #ffffff;
  border-radius: 8px;
`;

export const Title = styled.h1`
  font-family: Roboto;
  font-weight: 700;
  font-size: 20px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 8px 10px;
  font-family: Roboto;
  font-size: 14px;
  box-sizing: border-box;
  border-radius: 8px;
  margin-bottom: 10px;

  border: 1px solid
    ${({ $error }) => ($error ? "red" : "rgba(148, 166, 190, 0.4)")};

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
  background: ${({ disabled }) => (disabled ? "#bdbdbd" : "#4b6cf7")};
  border: none;
  border-radius: 4px;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;

export const ErrorText = styled.p`
  color: red;
  font-size: 12px;
  text-align: center;
`;

export const RegisterLink = styled.div`
  text-align: center;
  font-family: Roboto;
  font-size: 14px;
  color: rgba(148, 166, 190, 0.6);

  a {
    color: rgba(148, 166, 190, 0.6);
    text-decoration: underline;
    cursor: pointer;
  }
`;
