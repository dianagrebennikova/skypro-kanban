import styled from "styled-components";

export const ColumnWrapper = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 20px 0;

  p {
    color: #94A6BE;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    width: 220px;
  }
`;

export const CardsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  min-height: calc(130px * 5 + 10px * 4);
  padding-bottom: 160px;

  margin-right: 19px;
  @media screen and (max-width: 660px){
    flex-direction: row;
    min-height: 130px;
    padding-bottom: 0px;

  }
`;

export const DropZone = styled.div`
  width: 220px;
  height: 130px;
  border: 1px dashed ${({ theme }) => theme.colors.columnBorder};
  border-radius: 10px;
  margin-top: 5px;
  flex-shrink: 0;

  pointer-events: none;
`;


