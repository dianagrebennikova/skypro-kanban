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


const themeColors = {
  _orange: { bg: "#FFE4C2", text: "#FF6D00" },
  _green: { bg: "#B4FDD1", text: "#06B16E" },
  _purple: { bg: "#E9D4FF", text: "#9A48F1" },
  _gray: { bg: "#94A6BE", text: "#FFFFFF" },
};

const Card = ({ id, theme, title, date }) => {
  return (
    <Link to={`/card/${id}`}>
      <CardItem>
        <CardWrapper>
          <CardGroup>
            <CardTheme
              $bgColor={themeColors[theme].bg}
              $textColor={themeColors[theme].text}
            >
              <p>
                {theme === "_orange"
                  ? "Web Design"
                  : theme === "_green"
                  ? "Research"
                  : "Copywriting"}
              </p>
            </CardTheme>
            <CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </CardGroup>

          <CardContent>
            <CardTitle>{title}</CardTitle>
            <CardDate>
              <Calendar date={date} />
            </CardDate>
          </CardContent>
        </CardWrapper>
      </CardItem>
    </Link>
  );
};


export default Card;
