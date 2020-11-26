import styled from "styled-components";

export const StyledLabel = styled.p`
  font-size: ${({ size }) => `${size}px` || "16px"};
  font-weight: ${({ weight }) => weight || "normal"};
  color: ${({ color, theme }) => color || theme.text.primary};
  text-align: ${({ align }) => align || "left"};
  line-height: ${({ lineHeight }) => lineHeight}px;
  font-family: "Lato", sans-serif;

  .bold {
    font-weight: bold;
  }
  .light {
    font-weight: 300;
  }
  ${({ theme }) => theme.breakpoints.mobile} {
    font-size: ${({ mobileSize }) => `${mobileSize}px` || "13px"};
  }
`;
