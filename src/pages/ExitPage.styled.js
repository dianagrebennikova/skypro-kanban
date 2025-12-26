import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ExitWrapper = styled.div`
  width: 370px;
  height: 180px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ExitTitle = styled.h2`
  color: rgba(0, 0, 0, 1);
  padding-top: 50px;
  font-style: Bold;
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -2%;
  text-align: center;
  margin-bottom: 20px;
`;

export const ExitButtons = styled.div`
  display: flex;
  gap: 7px;
`;

export const ExitButton = styled.button`
  width: 153px;
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 10px 8px 10px;
  border-radius: 4px;
  background: rgba(86, 94, 239, 1);
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 14px;
  font-weight: 500;
  text-align: center;
  font-family: Roboto;
`;

export const ExitButtonNo = styled.button`
  box-sizing: border-box;
  border: 0.7px solid , rgba(86, 94, 239, 1);
  border-radius: 4px;
  cursor: pointer;
  width: 153px;
  height: 30px;
  color: rgba(86, 94, 239, 1);
  font-family: Roboto;
  font-size: 14px;
  font-weight: 500;

  &:hover {
    opacity: 0.8;
  }
`;
