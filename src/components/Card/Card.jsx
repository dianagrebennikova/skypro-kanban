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

const themeColors = {
  _orange: { bg: "#FFE4C2", text: "#FF6D00" },
  _green: { bg: "#B4FDD1", text: "#06B16E" },
  _purple: { bg: "#E9D4FF", text: "#9A48F1" },
  _gray: { bg: "#94A6BE", text: "#FFFFFF" },
};

const Card = ({ theme, title, date }) => {
  return (
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
          <a href="#popBrowse" target="_self">
            <CardBtn>
              <div></div>
              <div></div>
              <div></div>
            </CardBtn>
          </a>
        </CardGroup>

        <CardContent>
          <a href="" target="_blank">
            <CardTitle>{title}</CardTitle>
          </a>
          <CardDate>
            <Calendar date={date} />
          </CardDate>
        </CardContent>
      </CardWrapper>
    </CardItem>
  );
};

export default Card;
