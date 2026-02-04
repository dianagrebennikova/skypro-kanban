import styled from "styled-components";

export const CalendarWrapper = styled.div`
  width: 182px;
  gap: 6px;
    display: flex;
  

  @media screen and (max-width: 660px) {
    width: 100%;
  }
`;

export const CalendarBlock = styled.div`
  width: 100%;
`;

export const CalendarTitle = styled.p`
  margin-bottom: 14px;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0px;
  }
`;

export const CalendarNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 7px;
  margin-bottom: 8px;

  @media screen and (max-width: 660px) {
    padding: 0px;
  }
`;

export const CalendarMonth = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #94a6be;
  text-transform: capitalize;
`;

export const CalendarNavActions = styled.div`
  display: flex;
  gap: 12px;
`;

export const CalendarNavAction = styled.div`
  cursor: pointer;
  font-size: 16px;
  color: #94a6be;

  &:hover {
    opacity: 0.7;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;

export const CalendarDaysNames = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;

  @media screen and (max-width: 660px) {
    padding: 0px 15px;
  }
`;

export const CalendarDayName = styled.div`
  font-size: 10px;
  color: #94a6be;
  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
  `;

export const CalendarText = styled.p`
  color: #94A6BE;
  font-size: 10px;
  line-height: 1;

  @media screen and (max-width: 660px) {
    font-size: 14px;
    padding: 0px;
  }
`;

export const CalendarCells = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media screen and (max-width: 660px){
  justify-content: space-between;
  }
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  cursor: pointer;

  color: ${({ $today }) => ($today ? "#94A6BE" : "#94a6be")};
  font-weight: ${({ $today }) => ($today ? 700 : 400)};

  &:hover {
    background-color: #eaeef6;
  }

  &._active-day {
    background-color: #94a6be;
    color: #ffffff;
    font-weight: 700;
  }

  &._other-month {
    opacity: 0.4;
    pointer-events: none;
  }


  @media screen and (max-width: 660px) {
    width: 42px;
    height: 42px;
    font-size: 14px;
  }
`;

export const CalendarPeriod = styled.div`
  margin-top: 12px;
  padding: 0 7px;
  @media screen and (max-width: 660px) {
    padding: 0px;
  }
`;

export const CalendarPeriodText = styled.p`
  font-size: 10px;
  color: #94a6be;

  span {
    color: ${({ theme }) => theme.colors.text}; 
    font-weight: 500;
  }

  @media screen and (max-width: 660px) {
    font-size: 14px;
  }
`;
