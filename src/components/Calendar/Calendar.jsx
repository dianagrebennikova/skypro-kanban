import { useState } from "react";
import {
  CalendarWrapper,
  CalendarBlock,
  CalendarTitle,
  CalendarNav,
  CalendarMonth,
  CalendarNavActions,
  CalendarNavAction,
  CalendarContent,
  CalendarDaysNames,
  CalendarDayName,
  CalendarCells,
  CalendarCell,
  CalendarPeriod,
  CalendarPeriodText,
  CalendarText,
} from "./calendar.styled";

const DAYS = ["пн", "вт", "ср", "чт", "пт", "сб", "вс"];

export default function Calendar({ date, variant = "full" }) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState(
    date ? Number(date.split(".")[0]) : null
  );

  if (variant === "compact") {
    let formattedDate = "Без даты";
  
    if (date) {
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = String(d.getFullYear()).slice(-2);
      formattedDate = `${day}.${month}.${year}`;
    }
  
    return (
      <CalendarWrapper>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="13"
          height="13"
          viewBox="0 0 13 13"
          fill="none"
        >
          <path
            d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z"
            stroke="#94A6BE"
            strokeWidth="0.8"
          />
          <path
            d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125M9.75 1.21875V2.03125"
            stroke="#94A6BE"
            strokeWidth="0.8"
            strokeLinecap="round"
          />
        </svg>
  
        <CalendarText>{formattedDate}</CalendarText>
      </CalendarWrapper>
    );
  }
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const startDay =
    firstDayOfMonth.getDay() === 0 ? 6 : firstDayOfMonth.getDay() - 1;

  const daysInMonth = lastDayOfMonth.getDate();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const cells = [];

  // предыдущий месяц
  for (let i = startDay - 1; i >= 0; i--) {
    cells.push({ day: prevMonthDays - i, otherMonth: true });
  }

  // текущий месяц
  for (let i = 1; i <= daysInMonth; i++) {
    const dayOfWeek = new Date(year, month, i).getDay();

    cells.push({
      day: i,
      current:
        i === new Date().getDate() &&
        month === new Date().getMonth() &&
        year === new Date().getFullYear(),
      active: i === selectedDay,
      weekend: dayOfWeek === 0 || dayOfWeek === 6,
    });
  }

  // следующий месяц
  while (cells.length % 7 !== 0) {
    cells.push({ day: "", otherMonth: true });
  }

  const changeMonth = (direction) => {
    setCurrentDate(
      new Date(year, month + (direction === "next" ? 1 : -1), 1)
    );
    setSelectedDay(null);
  };

  return (
    <CalendarWrapper>
      <CalendarBlock>
        <CalendarTitle className="subttl">Даты</CalendarTitle>

        <CalendarNav>
          <CalendarMonth>
            {currentDate.toLocaleString("ru-RU", {
              month: "long",
              year: "numeric",
            })}
          </CalendarMonth>

          <CalendarNavActions>
            <CalendarNavAction onClick={() => changeMonth("prev")}>
              ‹
            </CalendarNavAction>
            <CalendarNavAction onClick={() => changeMonth("next")}>
              ›
            </CalendarNavAction>
          </CalendarNavActions>
        </CalendarNav>

        <CalendarContent>
          <CalendarDaysNames>
            {DAYS.map((day) => (
              <CalendarDayName key={day}>{day}</CalendarDayName>
            ))}
          </CalendarDaysNames>

          <CalendarCells>
            {cells.map((cell, index) => (
              <CalendarCell
                key={index}
                className={`
                  ${cell.otherMonth ? "_other-month" : ""}
                  ${cell.weekend ? "_weekend" : ""}
                  ${cell.current ? "_current" : ""}
                  ${cell.active ? "_active-day" : ""}
                `}
                onClick={() =>
                  !cell.otherMonth && cell.day && setSelectedDay(cell.day)
                }
              >
                {cell.day}
              </CalendarCell>
            ))}
          </CalendarCells>
        </CalendarContent>

        {selectedDay && (
          <CalendarPeriod>
            <CalendarPeriodText>
              Срок исполнения:{" "}
              <span>
                {String(selectedDay).padStart(2, "0")}.
                {String(month + 1).padStart(2, "0")}.{year}
              </span>
            </CalendarPeriodText>
          </CalendarPeriod>
        )}
      </CalendarBlock>
    </CalendarWrapper>
  );
}
