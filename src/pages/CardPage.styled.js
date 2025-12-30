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

export const Modal = styled.div`
  background: #ffffff;
  padding: 24px;
  border-radius: 10px;
  min-width: 320px;
`;
