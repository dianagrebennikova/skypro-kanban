import styled from "styled-components";

export const ColumnWrapper = styled.div`
  width: 20%;
  margin: 0;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;

  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
    text-transform: uppercase;
    width: 220px;
  }
`;


export const CardsWrapper = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;
