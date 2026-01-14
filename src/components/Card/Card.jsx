import Calendar from "../Calendar/Calendar";
import {
  CardItem,
  CardWrapper,
  CardGroup,
  CardTheme,
  CardBtn,
  CardContent,
  CardTitle,
  CardDate,
} from "./card.styled.js";
import { Link } from "react-router-dom";

const themeColorsMap = {
  "Web Design": { bg: "#FFE4C2", text: "#FF6D00" },
  Research: { bg: "#B4FDD1", text: "#06B16E" },
  Copywriting: { bg: "#E9D4FF", text: "#9A48F1" },
  Other: { bg: "#94A6BE", text: "#FFFFFF" },
};

const Card = ({ id, topic, title, date }) => {
  const colors = themeColorsMap[topic] || themeColorsMap["Other"];
  const themeLabel = topic || "Other";

  return (
    <Link to={`/card/${id}`}>
      <CardItem>
        <CardWrapper>
          <CardGroup>
            <CardTheme $bgColor={colors.bg} $textColor={colors.text}>
              <p>{themeLabel}</p>
            </CardTheme>
            <CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </CardGroup>

          <CardContent>
            <CardTitle>{title || "Без названия"}</CardTitle>
            <CardDate>
              <Calendar date={date} variant="compact" />
            </CardDate>
          </CardContent>
        </CardWrapper>
      </CardItem>
    </Link>
  );
};

export default Card;
