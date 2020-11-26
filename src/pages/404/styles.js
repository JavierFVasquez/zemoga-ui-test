import styled from "styled-components";
import colors from "../../styles/colors";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${colors.grey_0};
`;
export const Text = styled.h1`
  color: ${colors.green};
`;
