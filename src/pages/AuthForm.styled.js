import styled from "styled-components";

export const Bg = styled.div`
  min-height: 100vh;
  background: rgba(234, 238, 246, 1);
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Modal = styled.div`
  width: 368px;
  padding: 50px 60px;
  box-sizing: border-box;
border: 0.7px solid rgba(212, 219, 229, 1);
border-radius: 10px;
box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
background: rgba(255, 255, 255, 1);
  border-radius: 10px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const Title = styled.h2`
  font-size: 20px;
  font-weight: 700;
  color: var(--Black / 90, rgba(0, 0, 0, 1));;
  text-align: center;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const Input = styled.input`
min-height: 30px;   
padding-left: 10px;
  font-size: 14px;
  box-sizing: border-box;
border: 0.7px solid rgba(148, 166, 190, 0.4);
border-radius: 8px;
  color: #ffffff;

  &::placeholder {
    color: rgba(148, 166, 190, 1);
  }
`;

export const Button = styled.button`
min-height: 30px;   
  margin-top: 13px;
  padding: 4.5px;
  font-size: 14px;
  font-weight: 500;
text-align: center;
  background-color: #4b6cf7;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
`;

export const FormGroup = styled.div`
  margin-top: 10px;
  font-size: 14px;
  text-align: center;
  color: rgba(148, 166, 190, 0.4);

  a {
    margin-left: 5px;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  cursor: pointer;
  color: rgba(148, 166, 190, 0.4);
  text-decoration: underline;
  }
`;
