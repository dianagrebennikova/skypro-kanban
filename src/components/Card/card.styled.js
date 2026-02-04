import styled, { keyframes } from "styled-components";

export const CardItem = styled.div``;

export const CardWrapper = styled.div`
  width: 220px;
  height: 130px;
  background-color: ${({ theme }) =>
    theme.mode === "dark" ? "#20202C" : "#FFFFFF"};
  border-radius: 10px;
  position: relative;
  padding: 15px 13px 19px;
  overflow: hidden;
`;

const shimmer = keyframes`
  0% { background-position: 100% 0 }
  100% { background-position: 0 0 }
`;

export const SkeletonOverlay = styled.div`
  position: absolute;
  inset: 0;
  z-index: 2;
`;

export const SkeletonLine = styled.div`
  position: absolute;
  top: ${({ $top }) => $top || "0"};
  left: ${({ $left }) => $left || "0"};
  bottom: ${({ $bottom }) => $bottom || "auto"};
  height: ${({ $height }) => $height || "14px"};
  width: ${({ $width }) => $width || "100%"};
  border-radius: ${({ $borderRadius }) => $borderRadius || "0px"};
  margin-bottom: 12px;

  background: ${({ $gradient, theme }) =>
    $gradient
      ? theme.mode === "dark"
      ? "linear-gradient(90deg,rgba(133, 136, 140, 0.6) -6%,rgba(132, 137, 147, 0.71) 47%,rgba(193, 205, 220, 1) 106%)"
        : "linear-gradient(90.00deg, rgba(193.26, 204.72, 220, 1) -6.316%,rgba(233.02, 237.53, 246.56, 1) 46.754%,rgba(193, 205, 220, 1) 106.458%)"
      : "linear-gradient(90deg, #C1CDDC -6.316%, #C1CDDC 46.754%, #E9EEF7 106.458%)"};
  background-size: 400% 100%;
  animation: ${shimmer} 1.4s ease infinite;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${({ $bgColor }) => $bgColor};

  p {
    font-size: 10px;
    font-weight: 600;
    color: ${({ $textColor }) => $textColor};
  }
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: space-around;

  div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 10px;
  color: ${({ theme }) => (theme.mode === "dark" ? "#FFFFFF" : "#000000")};
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;

  svg {
    width: 13px;
  }

  p {
    font-size: 10px;
    color: #94A6BE;
  }
`;
