import styled from "styled-components";

export const MainWrapper = styled.main`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.mainBg};
  color: ${({ theme }) => theme.colors.text};
  transition: background-color 0.3s ease, color 0.3s ease;
`;

export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    padding: 0 16px;
  }
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.text};



  @media screen and (max-width: 1200px) {
    padding: 40px 0 64px;
  }
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const MainColumn = styled.div`
  width: 20%;
  margin: 0;
  display: flex;
  flex-direction: column;
  margin-right: 19px;

 
  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;
