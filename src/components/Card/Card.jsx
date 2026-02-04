import { useTheme } from "styled-components"; 
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
  SkeletonOverlay,
  SkeletonLine,
} from "./card.styled.js";
import { Link } from "react-router-dom";

const tagColors = {
  "Web Design": { bg: "#FF6D00", text: "#FFE4C2" },
  Research: { bg: "#06B16E", text: "#B4FDD1" },
  Copywriting: { bg: "#9A48F1", text: "#E9D4FF" },
  Other: { bg: "#94A6BE", text: "#FFFFFF" },
};

function getTagColors(topic, themeMode) {
  const colors = tagColors[topic] || tagColors["Other"];
  if (themeMode === "light" && topic !== "Other") {
    return { bg: colors.text, text: colors.bg }; 
  }
  return colors; 
}

const Card = ({ id, topic, title, date, isLoading }) => {
  const theme = useTheme();
  const colors = getTagColors(topic, theme.mode); 
  const themeLabel = topic || "Other";
  
  return (
    <Link to={isLoading ? "#" : `/card/${id}`}>
      <CardItem>
        <CardWrapper>
          {isLoading && (
            <SkeletonOverlay>
              <SkeletonLine $width="82px" $height="20px" $top="15px" $left="13px" $borderRadius="18px" $gradient />
              <SkeletonLine $width="18px" $height="4px" $top="23px" $left="185px" $gradient/>
              <SkeletonLine $width="113px" $height="13px" $top="50px" $left="13px" $gradient />
              <SkeletonLine $width="58px" $height="14px" $top="98px" $left="13px" $bottom="19px" $gradient />
            </SkeletonOverlay>
          )}

          {!isLoading && (
            <>
              <CardGroup>
                <CardTheme $bgColor={colors.bg} $textColor={colors.text}>
                  <p>{themeLabel}</p>
                </CardTheme>

                <CardBtn>
                  <div />
                  <div />
                  <div />
                </CardBtn>
              </CardGroup>

              <CardContent>
                <CardTitle>{title || "Без названия"}</CardTitle>
                <CardDate>
                  <Calendar date={date} variant="compact" />
                </CardDate>
              </CardContent>
            </>
          )}
        </CardWrapper>
      </CardItem>
    </Link>
  );
};

export default Card;
